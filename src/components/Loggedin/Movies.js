import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Rating from '@mui/material/Rating'
import { BsPlayCircleFill } from 'react-icons/bs'

const Movies = ({ movie }) => {

    const baseurl = "https://image.tmdb.org/t/p/original"

    const [viewMovie, setView] = useState({})

    useEffect(() => {

        Axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=2b4be7ed8b7df2bdf21fdf994029d9f8`)
            .then(response => {
                setView(response.data)
            })
    }, [movie])

    return (
        <div className='movie-div'>
            {Object.keys(viewMovie).length > 0 ?
                <>
                    <img className='movie-show-poster' src={baseurl + viewMovie['poster_path']} alt='movieimage'></img>
                    <h1 className='movie-show-title'>{viewMovie['original_title']}</h1>
                    <h4 className='movie-show-desc'>{viewMovie['overview']}</h4>
                    <BsPlayCircleFill className='play' />
                    <div className='rating'>
                        <h5>Average Rating:</h5>
                        <Rating precision={0.1} sx={{ color: 'red', borderColor: 'white' }} value={viewMovie['vote_average'] / 2} />
                    </div>
                    <div className='movie-show-genres'>
                        <p>Genres:</p>
                        {viewMovie['genres'].map(item =>
                            <>
                                <p>{item['name']}</p>
                            </>
                        )}
                    </div>
                    <div className='avatar-holder'>
                        {viewMovie['production_companies'].map(item =>
                            <>
                                <img className='movie-logo' src={baseurl + item['logo_path']} alt='logo'></img>
                                <h4 className='movie-show-desc'>{item['name']}</h4>
                            </>
                        )}
                    </div>
                </> : <p>No Movie Currently Selected</p>}

        </div>
    )
}

export default Movies