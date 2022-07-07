import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Logged = () => {
    return (
        <div>
            <Sidebar />
            <div className='sign'>
                <Link to="/">
                    <button>Sign Out</button>
                </Link>

            </div>
        </div>
    )
}

export default Logged