import { AppBar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return <>
        <AppBar style={{ padding: 30 }} position="static">
            <Link style={{color:'white'}} to={"/products"}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Products
                </Typography>
            </Link>
        </AppBar>
    </>
}

export default Navbar