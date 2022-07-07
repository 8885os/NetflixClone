import React from 'react'
import Signinup from './Signinup'
import { Link } from 'react-router-dom'
const Notlogged = () => {
    return (
        <div>
            <Signinup />
            <Link to="/home">Signed in</Link>
        </div>
    )
}

export default Notlogged