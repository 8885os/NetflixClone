import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useState } from 'react'
import Home from './Home'
import Movies from './Movies'
import Search from './Search'
import Shows from './Shows'

const Logged = () => {

    const navigate = useNavigate()

    const [componentsShown, setComponent] = useState(!localStorage.getItem('shown') ? {
        homeShown: true,
        searchShown: false,
        showsShown: false,
        moviesShown: false,
    } : JSON.parse(localStorage.getItem('shown')))

    const [currentMovie, setMovie] = useState(!localStorage.getItem('movie') ? 'no movie selected' : localStorage.getItem('movie'))
    const [currentShow, setShow] = useState(!localStorage.getItem('show') ? 'no show selected' : localStorage.getItem('show'))


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

    useEffect(() => {
        localStorage.setItem('shown', JSON.stringify(componentsShown))
        localStorage.setItem('movie', currentMovie)
        localStorage.setItem('show', currentShow)
    }, [componentsShown, currentMovie, currentShow]);

    return (
        <div>
            <div>
                <Sidebar setComponent={setComponent} />
            </div>
            <div className='margin-panel'>

                <div className='sign'>
                    <Link to="/" className='signout'>
                        <button className='redbutton' onClick={onSignOut}>Sign Out</button>
                    </Link>

                </div>
            </div>
            <div className="margin-panel">
                <div className='components'>
                    {componentsShown.homeShown && <Home setComponent={setComponent} movieSetter={setMovie} showSetter={setShow} />}
                    {componentsShown.searchShown && <Search setComponent={setComponent} movieSetter={setMovie} showSetter={setShow} />}
                    {componentsShown.showsShown && <Shows show={currentShow} />}
                    {componentsShown.moviesShown && <Movies movie={currentMovie} />}

                </div>
            </div>

        </div>
    )
}

export default Logged