import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = (props) => {
    const [data, setData] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=> console.log(err))
    }, [id])

    return (
    <div>
        {
            data?
            <div>
                <h1>Name: {data.name}</h1>
                <p>Height: {data.height}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Skin Color: {data.skin_color}</p>
                </div>
                :
                <div>
                    <p>These aren't the driods you are looking for</p>
                    <img stlye={{height:250, width: 250}} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmV2MGNhM3E4cnFxbG1hZ3Y3dGIwdjV4ZTdidmVjbmlrZDFmdm9rYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o84sF21zQYacFcl68/giphy.gif" alt="These aren't the driods you are looking for"></img>
                </div>
        }
    </div>
    )
}

export default People