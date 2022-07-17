import React from 'react'
import { Link } from 'react-router-dom'

const Signinup = () => {
    return (
        <div className='sign'>
            <Link to='/signup'>
                <button className='redbutton'>Sign Up</button>
            </Link>
            <Link to='/signin'>
                <button className='redbutton'>Sign In</button>
            </Link>

        </div>

    )
}

export default Signinup