import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleNation } from '../redux/apiRequest'

const Read = () => {
  const user = useSelector(state => state.auth.login.currentUser)
  const nation = useSelector(state => state.nations.singleNation?.nation)
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate("/login")

    getSingleNation(user?.token, dispatch, id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      <div className="container-fluid">
        <h1>The information of {nation?.name}</h1>
        <span>{nation?.description}</span>
      </div>
    </>
  )
}

export default Read