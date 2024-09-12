import { AppBar, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../../context/FavoritesContext'
import { useTranslation } from 'react-i18next'

function Navbar() {

    const { favorites } = useContext(FavoritesContext)
    const [selectedLang, setselectedLang] = useState("")

    const { t, i18n } = useTranslation()

    const changeLanguage = (value) => {
        i18n.changeLanguage(value)
        setselectedLang(value)
        localStorage.setItem("i18lang", value)
    }

    useEffect(() => {
        setselectedLang(localStorage.getItem("i18lang") || "tr")
    }
        , [])

    return <>
        <AppBar style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 60, paddingRight: 60 }} position="static">
            <Stack direction="row" justifyContent={"space-between"}>
                <Link style={{ color: 'white' }} to={"/"}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {t("Home")}
                    </Typography>
                </Link>
                <Link style={{ color: 'white' }} to={"/products"}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {t("Products")}
                    </Typography>
                </Link>
                <Link style={{ color: 'white' }} to={"/products/favorites"}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {t("Favorites")} <span style={{ color: 'red' }}>({favorites.length})</span>
                    </Typography>
                </Link>

                <select
                    value={selectedLang}
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value={"tr"}>TR</option>
                    <option value={"en"}>EN</option>
                    <option value={"fr"}>FR</option>
                </select>

            </Stack>
        </AppBar>
    </>
}

export default Navbar