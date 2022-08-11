import React, { useEffect, useState } from 'react'
import netflixicon from '../images/netflixicon.png'
import Axios from 'axios'
import SearchHolder from './SearchHolder'
const Search = ({ setComponent, movieSetter, showSetter }) => {

    const [searchValue, setValue] = useState('')
    const [searchResults, setResults] = useState({})

    useEffect(() => {
        const getData = async (value) => {
            const data = await Axios.get(`https://api.themoviedb.org/3/search/multi?query=${value}&language=en-US&api_key=2b4be7ed8b7df2bdf21fdf994029d9f8`)
            setResults(data)
    
        }

    })



    return (
        <div className='margin-panel'>

            <div className='search-component-div'>
                <img className='netflix-icon' src={netflixicon} alt='netflixicon'></img>
                <div className='search-component'>
                    <form className='search-form' onSubmit={(e) => {
                        e.preventDefault()
                        getData(searchValue)

                    }}>
                        <input type="text" className='search' onChange={(e) => setValue(e.target.value)} value={searchValue}></input>
                    </form>
                    <SearchHolder setComponent={setComponent} movieSetter={movieSetter} showSetter={showSetter} items={searchResults ? searchResults : 'No Results'} />



                </div>
            </div>
        </div>
    )
}

export default Search