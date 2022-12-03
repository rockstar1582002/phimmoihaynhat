import { Chip } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({ type, selectedGenres, setSelectedGenres, genres, setGenres, setPage }) => {

    const handleAdd = (gen) => {
        setSelectedGenres([...selectedGenres, gen])
        setGenres(genres.filter((g) => g.id !== gen.id))
        setPage(1)
    }

    const handleRemove = (gen) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== gen.id)
        );
        setGenres([...genres, gen]);
        setPage(1);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&language=en-US`)
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres()
        return () => {
            setGenres({})
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div style={{ padding: '6px 0' }}>

            {selectedGenres && selectedGenres.map((gen) => (
                <Chip
                    label={gen.name}
                    style={{ margin: 2 }}
                    size='small'
                    color='primary'
                    clickable
                    key={gen.id}
                    onDelete={() => handleRemove(gen)}
                />
            ))}

            {genres && genres.map((gen) => (
                <Chip
                    label={gen.name}
                    style={{ margin: 2 }}
                    size='small'
                    clickable
                    key={gen.id}
                    onClick={() => handleAdd(gen)}
                />
            ))}
        </div>
    )
}

export default Genres
