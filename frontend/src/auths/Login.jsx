import React, { useState } from 'react'
import { loginUser } from '../redux/apiRequest'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const newUser = {
            email: email,
            password: password
        }
        loginUser(newUser, dispatch, navigate)
    }
    return (
        <>
            <div className="container card-body">
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <div className="form-group mb-2">
                        <label className='form-label'>Username: </label>
                        <input
                            type="text"
                            placeholder='Enter your username'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <label className='form-label'>Password: </label>
                        <input
                            type={visible ? "text" : "password"}
                            placeholder='Enter your password'
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className="p-2" onClick={() => setVisible(!visible)}>
                            {visible ? <p><EyeOutlined /> <p style={{paddingTop: "1px"}}>Hide password</p></p> : <p><EyeInvisibleOutlined /> <p style={{paddingTop: "1px"}}>Show password</p></p>}
                        </div>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/register" className='btn btn-warning _button'>Sign Up</Link>
                </form>
            </div>
        </>
    )
}

export default Login