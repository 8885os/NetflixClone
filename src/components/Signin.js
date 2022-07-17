import React from 'react'
import netflixicon from '../images/netflixicon.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VscHome } from 'react-icons/vsc'
import { useAuth } from '../context/AuthContext'


const Signin = () => {

    const navigate = useNavigate()

    const [form, setform] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    const auth = useAuth()



    const [formstate, setFormState] = useState('')

    const onSignIn = (e) => {
        e.preventDefault()
        auth.signin(form.email, form.password, () => navigate('/home')).then(() => {

        }).catch((error) => {
            setFormState(error.message.replace("Firebase: ", "").replace(`(${error.code}).`, ''))

        })
        setform({
            email: '',
            password: '',
        })
    }

    return (
        <div>
            <Link to='/'>
                <img id='netflixicon' src={netflixicon} alt='netflixicon'></img>
            </Link>
            <form className='formclassin' onSubmit={onSignIn} >
                <div className='inputholder'>
                    <label htmlFor="email"> Email:</label>
                    <input type="text" value={form.email} name="email" onChange={handleChange} id='email'></input>
                </div>
                <div className='inputholder'>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" value={form.password} name="password" onChange={handleChange} id='pass'></input>
                </div>
                <p className='formerr'>{formstate}</p>
                <input type="submit" id='signer' className='redbutton'></input>
                <Link className='gosign' to='/signup'>Click here to create an account.</Link>
            </form>
            <Link to='/'>
                <VscHome className='homeicon'></VscHome>
            </Link>
        </div>

    )
}

export default Signin