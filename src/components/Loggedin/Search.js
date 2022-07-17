import React, { useState } from 'react'
import netflixicon from '../../images/netflixicon.png'

const Search = () => {

    const [searchValue, setValue] = useState('')

    return (
        <div className='component-div'>
            <img id='netflixicon' src={netflixicon} alt='netflixicon'></img>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(searchValue)
            }}>
                <input type="text" className='search' onChange={(e) => setValue(e.target.value)} value={searchValue}></input>

            </form>

        </div>
    )
}

export default Search