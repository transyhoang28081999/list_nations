import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteNation, getAllNations } from '../redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'

const ListNations = () => {
    const user = useSelector(state => state.auth.login?.currentUser)
    const nationList = useSelector(state => state.nations.nations?.allNations)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) navigate("/login")
        if (user?.token) {
            getAllNations(user?.token, dispatch)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDeleteNation =  (id) => {
        deleteNation(user?.token, dispatch, id)
    }
    return (
        <>
            <div className="container">
                <h2 className="text-center">List Nations</h2>
                <Link to="/add" className="btn btn-info _add">Add   </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Population (Million People)</th>
                            <th>GDP (Billion USD)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nationList?.map(nation =>
                                <tr key={nation.id}>
                                    <th>{nation.name}</th>
                                    <th>{nation.population / 1000000}</th>
                                    <th>{nation.gdp}</th>
                                    <td>
                                        <Link to={`read/${nation.id}`} className="btn btn-info _button">Read</Link>
                                        <Link to={`/${nation.id}`} className="btn btn-success _button">Update</Link>
                                        <button className="btn btn-danger _button" onClick={() => handleDeleteNation(nation.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListNations