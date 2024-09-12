import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

function Add() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState("")
    const [unitsInStock, setunitsInStock] = useState("")
    const [quantityPerUnit, setquantityPerUnit] = useState("")

    const navigate = useNavigate()


    const add = () => {
        let newProduct = {
            name,
            unitPrice: Number(unitPrice),
            unitsInStock: Number(unitsInStock),
            quantityPerUnit
        }

        axiosInstance.post("products", newProduct)
            .then(res => {
                enqueueSnackbar("Success!", {variant:"success"})
                navigate("/products")
            })
    }

    return <>
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={4}>
                <TextField fullWidth value={name} onChange={(e) => setname(e.target.value)} placeholder='Name' />
                <TextField fullWidth value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} placeholder='Unit Price' />
            </Stack>
            <Stack direction={"row"} spacing={4}>
                <TextField fullWidth value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)} placeholder='Stock' />
                <TextField fullWidth value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} placeholder='Quantity Per Unit' />
            </Stack>
            <Stack>
                <Button onClick={add} sx={{ width: "25%" }} variant="contained">Add</Button>
            </Stack>
        </Stack>
    </>
}

export default Add