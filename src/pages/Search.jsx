import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContent from '../components/Header/SingleContent';
import Paginations from '../components/Pagination/Pagination';

const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',

            }
        }
    })
    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
            setContent(data.results);
            setNumOfPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [page]);


    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: '15px 0' }}>
                    <TextField
                        style={{ flex: 1 }}
                        className='searchBox'
                        label='Search'
                        variant='filled'
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button onClick={fetchSearch} variant='container' style={{ marginLeft: 10 }}><SearchIcon /></Button>
                </div>
            </ThemeProvider>
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            title={c.title || c.name}
                            date={c.release_date}
                            poster={c.poster_path}
                            media_type='movie'
                            vote_average={c.vote_average}
                        />
                    ))}
                {searchText &&
                    !content &&
                    (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>
            {numOfPages > 1 &&
                <Paginations setPage={setPage} numOfPages={numOfPages} />
            }

        </div>
    )
}

export default Search