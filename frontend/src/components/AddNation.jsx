import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createNation, getSingleNation, updateNation } from '../redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'

const AddNation = () => {
  const user = useSelector(state => state.auth.login?.currentUser)
  const nation = useSelector(state => state.nations.singleNation?.nation)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const [name, setName] = useState('')
  const [population, setPopulation] = useState()
  const [gdp, setGdp] = useState()
  const [description, setDescription] = useState('')


  useEffect(() => {
    if (!user) navigate("/login")
    getSingleNation(user?.token, dispatch, id)
    // setNation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (id === "add") {
      setName('')
      setPopulation()
      setGdp()
      setDescription()
      return
    }
    setName(nation?.name)
    setPopulation(nation?.population)
    setGdp(nation?.gdp)
    setDescription(nation?.description)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nation])

  const handleware = () => {

    if (id === "add") {
      return <>
        <h2 className="text-center">Add New Country</h2>
      </>
    }
    return <>
      <h2 className="text-center">Update the information of {nation?.name}</h2>
    </>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNation = { name, population, gdp, description }
    if (id === "add") createNation(newNation, user?.token, dispatch, navigate)
    else updateNation(newNation, user?.token, dispatch, navigate, id)
  }
  return (
    <>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              handleware()
            }
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label className="form-label"> Name: </label>
                  <input
                    type="text"
                    placeholder="Enter country's name"
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Population: </label>
                  <input
                    type="text"
                    placeholder="Enter population"
                    className='form-control'
                    value={population}
                    onChange={(e) => setPopulation(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> GDP: </label>
                  <input
                    type="text"
                    placeholder="Enter the GDP"
                    className='form-control'
                    value={gdp}
                    onChange={(e) => setGdp(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Description: </label>
                  <textarea
                    type="textarea"
                    placeholder="Description this country"
                    className='form-control'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className='btn btn-warning _button'>Go Back</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNation