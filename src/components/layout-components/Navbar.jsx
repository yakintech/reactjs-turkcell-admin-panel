import { AppBar, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../../context/FavoritesContext'

function Navbar() {

    const { favorites } = useContext(FavoritesContext)


    return <>
        <AppBar style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 60, paddingRight: 60 }} position="static">
            <Stack direction="row" justifyContent={"space-between"}>
                <Link style={{ color: 'white' }} to={"/"}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                </Link>
                <Link style={{ color: 'white' }} to={"/products"}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Products
                    </Typography>
                </Link>
                <Link style={{ color: 'white' }} to={"/products/favorites"}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Favorites <span style={{color:'red'}}>({favorites.length})</span>
                    </Typography>
                </Link>

            </Stack>
        </AppBar>
    </>
}

export default Navbar