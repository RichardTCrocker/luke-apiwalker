import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Form() {
    const [formData, setFormData] =useState({
        type: 'people',
        idNumber: 0
    })

    const changeHandler = (e) =>{
        const {name, value} =e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/${formData.type}/${formData.idNumber}`)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='type'>Search for: </label>
                <select name='type' id='type' onChange={changeHandler}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
            </div>
            <div>
                <label htmlFor='idNumber'>ID: </label>
                <input type='number' name='idNumber' value={formData.idNumber} onChange={changeHandler} />
            </div>
            <button type='submit'>Search</button>
        </form>
    )
}