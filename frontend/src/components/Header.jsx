import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/apiRequest'

const Header = () => {
    const user = useSelector(state => state.auth.login.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        logoutUser(user?.token, dispatch, navigate)
    }
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className='container-fluid _header'>
                    <NavLink to="/" className="navbar-brand">Nations List Management</NavLink>
                    {user ? (
                        <>
                            <span style={{color: "white"}}>Hi, {user.name}</span>
                            <Link className='nav-link text-white' onClick={handleLogout}>Log out</Link>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link text-white">Sign in</NavLink>
                            <NavLink to="/register" className="nav-link text-white">Sign up</NavLink>
                        </>
                    )}

                </div>
            </nav>
        </header>
    )
}

export default Header