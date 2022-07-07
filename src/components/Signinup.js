import React from 'react'
import { Link } from 'react-router-dom'

const Signinup = () => {
    return (
        <div className='sign'>
            <Link to='/signup'>
                <button>Sign Up</button>
            </Link>
            <button>Sign In</button>

        </div>

    )
}

export default Signinup