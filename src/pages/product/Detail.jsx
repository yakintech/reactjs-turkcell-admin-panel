import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance';
import { Box, Button, CircularProgress } from '@mui/material';

function Detail() {
    const [detail, setdetail] = useState({})
    const [loading, setloading] = useState(true)

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {

        axiosInstance.get(`products/${id}`)
            .then(res => {
                setdetail(res.data)
                setloading(false)
            })

    }, [])


    return <>
        {
            loading == true ? <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box> : <>
                <h1>Id: {id}</h1>
                <hr />
                <h2>Name: {detail.name}</h2>
                <hr />
                <h2>Unit Price: {detail.unitPrice}</h2>
                <hr />
                <h2>Stock: {detail.unitsInStock}</h2>
                <hr />
                <h2>Category Id: {detail.categoryId}</h2>
                <hr />
                <Button onClick={() => navigate(-1)} variant="contained">Go Back</Button>

            </>
        }
    </>
}

export default Detail