import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { VscHome } from 'react-icons/vsc'
import { BiMovie } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'



const Sidebar = ({ setComponent }) => {


    const handleSearch = (() => {
        setComponent({
            homeShown: false,
            searchShown: true,
            showsShown: false,
            moviesShown: false,
        })
    })
    const handleHome = (() => {
        setComponent({
            homeShown: true,
            searchShown: false,
            showsShown: false,
            moviesShown: false,
        })
    })
    const handleShows = (() => {
        setComponent({
            homeShown: false,
            searchShown: false,
            showsShown: true,
            moviesShown: false,
        })
    })
    const handleMovies = (() => {
        setComponent({
            homeShown: false,
            searchShown: false,
            showsShown: false,
            moviesShown: true,
        })
    })


    return (
        <div className='side-bar'>
            <nav className='side-icons'>
                <li className='list-icons' ><BsSearch onClick={handleSearch} /></li>
                <li className='list-icons' ><VscHome onClick={handleHome} /></li>
                <li className='list-icons' ><FiMonitor onClick={handleShows} /></li>
                <li className='list-icons' ><BiMovie onClick={handleMovies} /></li>
            </nav>

        </div>
    )
}

export default Sidebar