import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import MovieHolder from './MovieHolder'
import ShowHolder from './ShowHolder'
import MixHolder from './MixHolder'

const Home = ({ setComponent, movieSetter, showSetter }) => {

    const [movies, setMovie] = useState([])
    const [shows, setShows] = useState([])
    const [mix, setMix] = useState([])
    const [topRatedShow, setTopRatedShow] = useState([])
    const [topRatedMovie, setTopRatedMovie] = useState([])

    useEffect(() => {
        Axios.get("https://api.themoviedb.org/3/discover/tv?page=1&language=en-US&sort_by=popularity.desc&api_key=2b4be7ed8b7df2bdf21fdf994029d9f8")
            .then((response) => {
                const data = response.data.results.filter(item => item['original_language'] === 'en')
                setShows(data)

            })
        Axios.get("https://api.themoviedb.org/3/discover/movie?page=1&language=en-US&sort_by=popularity.desc&api_key=2b4be7ed8b7df2bdf21fdf994029d9f8")
            .then((response) => {
                const data = response.data.results.filter(item => item['original_language'] === 'en')
                setMovie(data)
            })
        Axios.get("https://api.themoviedb.org/3/discover/movie?page=1&language=en-US&sort_by=popularity.desc&api_key=2b4be7ed8b7df2bdf21fdf994029d9f8")
            .then((response) => {
                const data = response.data.results.filter(item => item['original_language'] === 'en')
                setTopRatedMovie(data)
            })
        Axios.get("https://api.themoviedb.org/3/discover/tv?page=1&language=en-US&sort_by=popularity.desc&api_key=2b4be7ed8b7df2bdf21fdf994029d9f8")
            .then((response) => {
                const data = response.data.results.filter(item => item['original_language'] === 'en')
                setTopRatedShow(data)

            })


    }, [])

    useEffect(() => {
        setMix([])
        for (let i = 0; i < Math.min(movies.length, shows.length); i++) {
            setMix(arr => [...arr, movies[i], shows[i]])
        }


    }, [movies, shows])

    return (
        <div className='component-div'>
            <div className='item-holder'>
                <h3>Popular Right Now</h3>
                <MixHolder items={mix} setComponent={setComponent} movieSetter={movieSetter} showSetter={showSetter} />
            </div>
            <div className='item-holder'>
                <h3>Top Rated Movies</h3>
                <MovieHolder items={topRatedMovie} setComponent={setComponent} movieSetter={movieSetter} />
            </div>
            <div className='item-holder'>
                <h3>Top Rated Tv Series</h3>
                <ShowHolder items={topRatedShow} setComponent={setComponent} showSetter={showSetter} />
            </div>
        </div>
    )
}

export default Home