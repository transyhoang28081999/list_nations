import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteNation, getAllNations } from '../redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

const ListNations = () => {
    const user = useSelector(state => state.auth.login?.currentUser)
    var nationList = useSelector(state => state.nations.nations?.allNations)

    const [show, setShow] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) navigate("/login")
        if (user?.token) {
            getAllNations(user?.token, dispatch)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => {
        setShow(false)
    }

    const handleDeleteNation = (id) => {
        setDeleteId(id)
        setShow(true)
    }

    const handleConfirmDeleteNation = () => {
        deleteNation(user?.token, dispatch, deleteId)
        setShow(false)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete this country?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, Do you want to delete this country?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleConfirmDeleteNation}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
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