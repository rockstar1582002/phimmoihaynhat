import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres';
import SingleContent from '../components/Header/SingleContent';
import Paginations from '../components/Pagination/Pagination';
import useGenre from '../hooks/useGenre';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres)
    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results)
        setNumOfPages(data.total_pages)
        setLoading(false)

    };
    useEffect(() => {
        window.scroll(0, 0);
        setTimeout(() => {
            fetchMovies();
        }, 1000)
        // eslint-disable-next-line
    }, [genreforURL, page]);

    return (
        <div>
            <span className='pageTitle'>Top Rated</span>
            <Genres
                type='movie'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}

            />
            <div className="trending">
                {loading === false && content && content.map((c) =>
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        title={c.title || c.name}
                        date={c.release_date}
                        poster={c.poster_path}
                        media_type='movie'
                        vote_average={c.vote_average}
                    />
                )}

            </div>
            <p>{loading === true && <p style={{ textAlign: 'center' }}>loading...</p>}</p>
            {numOfPages > 1 &&
                <Paginations setPage={setPage} numOfPages={numOfPages} />
            }

        </div>
    )
}

export default Movies
