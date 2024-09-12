import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance';
import { Box, Button, CircularProgress } from '@mui/material';
import { FavoritesContext } from '../../context/FavoritesContext';

function Detail() {
    const [detail, setdetail] = useState({})
    const [loading, setloading] = useState(true)

    const { favOperation, favorites } = useContext(FavoritesContext)

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {

        axiosInstance.get(`products/${id}`)
            .then(res => {
                setdetail(res.data)
                setloading(false)
            })

    }, [])


    const favButton = () => {
        var itemCheck = favorites.find(q => q.id == id)
        if (itemCheck) {
            return <Button sx={{marginLeft:5}} onClick={() => favOperation(detail)} variant="contained" color="error">Remove from Fav</Button>
        }
        else {
            return <Button sx={{marginLeft:5}}  onClick={() => favOperation(detail)} variant="contained" color="primary">Add to Fav</Button>
        }
    }

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
                {
                    favButton()
                }

            </>
        }
    </>
}

export default Detail