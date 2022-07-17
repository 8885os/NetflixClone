import React from 'react'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useState } from 'react'
import Home from './Loggedin/Home'
import Movies from './Loggedin/Movies'
import Search from './Loggedin/Search'
import Shows from './Loggedin/Shows'

const Logged = () => {

    const navigate = useNavigate()

    const [componentsShown, setComponent] = useState({
        homeShown: true,
        searchShown: false,
        showsShown: false,
        moviesShown: false,
    })


    const auth = getAuth();

    const onSignOut = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <div>
            <div>
                <Sidebar setComponent={setComponent} />
            </div>

            <div className='sign'>
                <Link to="/">
                    <button id='signout' className='redbutton' onClick={onSignOut}>Sign Out</button>
                </Link>

            </div>
            <div className='components'>
                {componentsShown.homeShown && <Home />}
                {componentsShown.searchShown && <Search />}
                {componentsShown.showsShown && <Shows />}
                {componentsShown.moviesShown && <Movies />}

            </div>

        </div>
    )
}

export default Logged