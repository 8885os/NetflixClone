import React from 'react'
import netflixicon from '../images/netflixicon.png'

const WelcomeScreen = () => {
    return (
        <div className='welcome-screen'>
            <img className='home-icon' src={netflixicon} alt='netflixicon'></img>
            <p className='netflix-text'>Welcome to This Netflix Clone, Sign up or sign in to get started browsing through Tv and Movies!</p>
        </div>
    )
}

export default WelcomeScreen