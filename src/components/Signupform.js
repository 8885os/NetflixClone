import React from 'react'
import { useState } from 'react'
import netflixicon from '../images/netflixicon.png'


const Signupform = () => {

    const [form, setform] = useState({
        email: '',
        password: '',
        retypepass: '',
    })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const onSignUp = (e) => {
        e.preventDefault();
        alert(form.filter(formitem => formitem === ''))
    }

    return (
        <div>
            <img id='netflixicon' src={netflixicon} alt='netflixicon'></img>
            <form className='formclass' onSubmit={onSignUp}>
                <div className='inputholder'>
                    <label for="email"> Email:</label>
                    <input type="text" value={form.email} name="email" onChange={handleChange} id='email'></input>
                </div>
                <div className='inputholder'>
                    <label for="pass">Password:</label>
                    <input type="password" value={form.password} name="password" onChange={handleChange} id='pass'></input>
                </div>
                <div className='inputholder'>
                    <label for="repass">Re-Type Password:</label>
                    <input type="password" value={form.retypepass} name="retypepass" onChange={handleChange} id='repass'></input>
                </div>
                <button type="submit" onClick={onSignUp} id='signup'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signupform