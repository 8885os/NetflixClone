import React from 'react'
import { useState } from 'react'
import netflixicon from './images/netflixicon.png'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { VscHome } from 'react-icons/vsc'


const Signupform = () => {

    const navigate = useNavigate()

    const [form, setform] = useState({
        email: '',
        password: '',
        retypepass: '',
    })

    const [formstate, setFormState] = useState('')


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const auth = useAuth()


    const onSignUp = (e) => {
        e.preventDefault()

        if (form.password === form.retypepass) {
            auth.signup(form.email, form.password, () => navigate('/home'))
            setform({
                email: '',
                password: '',
                retypepass: '',
            })
        }
        else {
            setform({
                password: '',
                retypepass: '',
            })
            setFormState('Make Sure Both Passwords Match.')

        }

    }


    return (
        <div>
            <Link to='/'>
                <img id='netflixicon' src={netflixicon} alt='netflixicon'></img>
            </Link>
            <form className='formclass' onSubmit={onSignUp} id='signupform'>
                <div className='inputholder'>
                    <label htmlFor="email"> Email:</label>
                    <input type="text" value={form.email} name="email" onChange={handleChange} id='email'></input>
                </div>
                <div className='inputholder'>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" value={form.password} name="password" onChange={handleChange} id='pass'></input>
                </div>
                <div className='inputholder'>
                    <label htmlFor="repass">Re-Type Password:</label>
                    <input type="password" value={form.retypepass} name="retypepass" onChange={handleChange} id='repass'></input>
                </div>
                <p className='formerr'>{formstate}</p>
                <input type="submit" id='signer' className='redbutton'></input>
                <Link className='gosign' to='/signin'>Click here to Sign in.</Link>
            </form>
            <Link to='/'>
                <VscHome className='homeicon'></VscHome>
            </Link>
        </div>
    )
}

export default Signupform