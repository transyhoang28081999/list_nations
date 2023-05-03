import axios from "axios"
import { toast } from 'react-toastify'
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice"
import { createOrUpdateNationFailed, createOrUpdateNationStart, createOrUpdateNationSuccess, deleteNationFailed, deleteNationStart, deleteNationSuccess, getNationsFailed, getNationsStart, getNationsSuccess, getSingleNationFailed, getSingleNationStart, getSingleNationSuccess } from "./nationSlice";

const BASE_AUTH_URL = "http://localhost:8080/api/v1/auth";
const BASE_NATION_URL = "http://localhost:8080/api/v1/nations";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(BASE_AUTH_URL + "/authenticate", user)
        dispatch(loginSuccess(res.data))
        toast.success("Log in successfully!")
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post(BASE_AUTH_URL + "/register", user)
        dispatch(registerSuccess())
        toast.success("Register successfully! Now, you should log in.")
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed())
    }
}

export const logoutUser = async (accessToken, dispatch, navigate) => {
    dispatch(logoutStart())
    try {
        await axios.post(BASE_AUTH_URL + "/logout",{},
        {
            headers:{
                "Authorization": `Bearer ${accessToken}`
            }
        });
        dispatch(logoutSuccess())
        toast.success("Log out successfully!")
        navigate("/login")
    } catch (error) {
        dispatch(logoutFailed())
    }
}

export const getAllNations = async (accessToken, dispatch) => {
    dispatch(getNationsStart())
    try {
        const res = await axios.get(BASE_NATION_URL,{
            headers:{
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getNationsSuccess(res.data))
    } catch (error) {
        dispatch(getNationsFailed())
    }
}

export const getSingleNation = async (accessToken, dispatch, id) => {
    dispatch(getSingleNationStart())
    try {
        const res = await axios.get(BASE_NATION_URL + "/" + id,{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(getSingleNationSuccess(res.data))
    } catch (error) {
        dispatch(getSingleNationFailed())
    }
}

export const createNation = async (nation, accessToken, dispatch, navigate) => {
    dispatch(createOrUpdateNationStart())
    try {
        await axios.post(BASE_NATION_URL, nation, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateNationSuccess())
        toast.success("Created a new country!")
        navigate("/")
    } catch (error) {
        dispatch(createOrUpdateNationFailed())
    }
}

export const updateNation = async (nation, accessToken, dispatch, navigate, id) => {
    dispatch(createOrUpdateNationStart())
    try {
        await axios.put(BASE_NATION_URL + '/' + id, nation, {
            headers: {
                "Authorization" : `Bearer ${accessToken}`
            }
        })
        dispatch(createOrUpdateNationSuccess())
        toast.success(nation.name + " has updated!")
        navigate('/')
    } catch (error) {
        dispatch(createOrUpdateNationFailed())
    }
}


export const deleteNation = async (accessToken, dispatch, id) => {
    dispatch(deleteNationStart())
    try {
        await axios.delete(BASE_NATION_URL + "/" + id, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        dispatch(deleteNationSuccess(id))
        toast.success("Delete successfully!")
    } catch (error) {
        dispatch(deleteNationFailed())
    }
}
