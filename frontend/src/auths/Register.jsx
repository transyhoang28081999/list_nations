import React, { useState } from 'react'
import { registerUser } from '../redux/apiRequest'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const newUser = {
            name: name,
            email: email,
            password: password
        }
        registerUser(newUser, dispatch, navigate)
    }
    return (
        <>
            <div className="container card-body">
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className="form-group mb-2">
                        <label className='form-label'>Your name: </label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <label className='form-label'>Email: </label>
                        <input
                            type="text"
                            placeholder='Enter your email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group mb-2">
                        <label className='form-label'>Password: </label>
                        <input
                            type="text"
                            placeholder='Enter your password'
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <button className='btn btn-success'>Submit</button>
                    <Link to="/login" className='btn btn-warning _button'>Sign In</Link>
                </form>
            </div>
        </>
    )
}

export default Register