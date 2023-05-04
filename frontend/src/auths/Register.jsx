import React, { useState } from 'react'
import { registerUser } from '../redux/apiRequest'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        }, validationSchema: Yup.object({
            name: Yup.string().required("This field is required."),
            // eslint-disable-next-line no-useless-escape
            email: Yup.string().required("This field is required.").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please enter a valid email username."),
            password: Yup.string().required("This field is required.").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must be at least 8 characters, one letter and one number.")
        }),
        onSubmit: (values) => {
            console.log(values)
            registerUser(values, dispatch, navigate)
        }
    })

    return (
        <>
            <div className="container card-body">
                <h1>Sign Up</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-2">
                        <label className='form-label'>Your name: </label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            className='form-control'
                            id='name'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange} />
                        {formik.errors.name && <p className='errorMsg'> {formik.errors.name} </p>}
                    </div>
                    <div className="form-group mb-2">
                        <label className='form-label'>Email: </label>
                        <input
                            type="text"
                            placeholder='Enter your email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email && <p className='errorMsg'> {formik.errors.email} </p>}
                    </div>

                    <div className="form-group mb-2">
                        <label className='form-label'>Password: </label>
                        <input
                            type={visible ? "text" : "password"}
                            placeholder='Enter your password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange} />
                        {formik.errors.password && <p className='errorMsg'> {formik.errors.password} </p>}
                        <div className="p-2" onClick={() => setVisible(!visible)}>
                            {visible ? <p><EyeOutlined /> <br /> Hide password</p> : <p><EyeInvisibleOutlined /> <br /> Show password</p>}
                        </div>
                    </div>


                    <button type='submit' className='btn btn-success'>Submit</button>
                    <Link to="/login" className='btn btn-warning _button'>Sign In</Link>
                </form>
            </div>
        </>
    )
}

export default Register