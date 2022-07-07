import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { VscHome } from 'react-icons/vsc'
import { BiMovie } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'


const Sidebar = () => {
    return (
        <div className='side-bar'>
            <nav className='side-icons'>
                <li><BsSearch /></li>
                <li><VscHome /></li>
                <li><FiMonitor /></li>
                <li><BiMovie /></li>
            </nav>

        </div>
    )
}

export default Sidebar