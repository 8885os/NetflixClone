import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Avatar, FormControl, InputLabel } from '@mui/material'
import Rating from '@mui/material/Rating'
import { BsPlayCircleFill } from 'react-icons/bs'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Shows = ({ show }) => {

    const baseurl = "https://image.tmdb.org/t/p/original"

    const [viewShow, setView] = useState({})
    const [season, setSeason] = useState('');
    const [seasonView, viewSeason] = useState({})

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/tv/${show}?api_key=2b4be7ed8b7df2bdf21fdf994029d9f8`)
            .then(response => {
                setView(response.data)
            })
    }, [show])

    const handleChange = (event) => {
        setSeason(event.target.value);
    };


    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/tv/${show}/season/${season.charAt(season.length - 1)}?api_key=2b4be7ed8b7df2bdf21fdf994029d9f8`)
            .then(response => {
                viewSeason(response.data)
            })
    }, [show, season, seasonView])


    return (
        <div className='movie-show-div'>
            {Object.keys(viewShow).length > 0 ?
                <div className='movie-show'>
                    <div className='season-poster-holder'>
                        <img className='movie-show-poster' src={baseurl + viewShow['poster_path']} alt='movieimage'></img>
                        <div className='movie-show-desc-holder'>
                            <h1 className='movie-show-title'>{viewShow['name']}</h1>
                            <h4 className='movie-show-desc'>{viewShow['overview']}</h4>
                            <div className='rating'>
                                <h5>Average Rating:</h5>
                                <Rating precision={0.1} sx={{ color: 'red', borderColor: 'white' }} value={viewShow['vote_average'] / 2} />
                            </div>
                            <div className='movie-show-genres'>
                                <p>Genres:</p>
                                {viewShow['genres'].map(item =>
                                    <>
                                        <p>{item['name']}</p>
                                    </>
                                )}
                            </div>


                            <div className='avatar-holder'>
                                {viewShow['created_by'].map(item =>

                                    <>
                                        <Avatar className='movie-logo' sx={{ height: '70px', width: '70px' }} src={baseurl + item['profile_path']}></Avatar>
                                        <h4 className='movie-show-desc'>{item['name']}</h4>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className='season-position'>
                        <FormControl className='form-select' sx={{
                            m: 1, minWidth: 110, color: 'white', borderColor: 'white', borderBlockColor: 'white', borderBlockEndColor: 'white', borderBlockStartColor: 'white',
                            ".MuiSelect-outlined": { color: 'white' },
                            '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                            '.css-clshtn-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                            '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgb(255,255,255,0.87)' },

                        }}>
                            <InputLabel sx={{
                                color: 'white', ".MuiSelect-outlined": { color: 'white' }, backgroundColor: 'rgb(18, 18, 18)', padding: '1px',
                            }} >Seasons</InputLabel>
                            <Select variant='outlined' sx={{ ".Mui-focused": { color: '#f7f7f7' }, color: 'white', '.MuiSelect-icon': { color: 'white' }, ".MuiSelect-outlined": { color: 'white' } }} value={season} onChange={handleChange}>
                                {viewShow['seasons'].map(item => <MenuItem value={"Season " + item['season_number']}>{"Season " + item['season_number']}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <div className='season-display'>
                            {Object.keys(seasonView).length > 0 ? seasonView['episodes'].map(item =>
                                <div>
                                    <img className='episode-image' src={baseurl + item['still_path']} alt='episode'></img>
                                    <h5>{item['episode_number']} - {item['name']} </h5>
                                    <p className='episode-overview'>{item['overview']}</p>
                                </div>
                            ) : ''}

                        </div>

                    </div>


                </div> : <p>No Show Currently Selected</p>
            }

        </div >
    )
}

export default Shows