import { Button, Stack } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../../context/FavoritesContext'
import { useTranslation } from 'react-i18next'

function List() {

    const [products, setproducts] = useState([])

    const { favOperation, favorites } = useContext(FavoritesContext)

    const navigate = useNavigate()

    const { t } = useTranslation()


    useEffect(() => {
        load()
    }, [])

    const load = () => {

        axiosInstance.get("products")
            .then(res => setproducts(res.data))
    }


    const deleteProduct = (id) => {
        var confirm = window.confirm("Are u sure?")

        if (confirm) {
            axiosInstance.delete("products/" + id)
                .then(res => {
                    enqueueSnackbar("Product deleted", { variant: "success" })
                    load();
                })
        }
    }

    const columns = [
        {
            field: "id",
            headerName: "Product ID",
            flex: 1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 2
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 1,
            renderCell: (item) => <>{item.row.unitPrice?.toFixed(2)}</>
        },
        {
            field: "unitsInStock",
            headerName: "Stock",
            flex: 1
        },
        {
            field: "Delete",
            headerName: "Delete",
            renderCell: (item) => <Button onClick={() => deleteProduct(item.row.id)} variant="contained" color="error">{t("Delete")}</Button>,
            flex: 1
        },
        {
            field: "Detail",
            header: "Detail",
            renderCell: (item) => <><Button onClick={() => navigate(`/products/${item.row.id}`)} variant="contained">{t("Detail")}</Button></>,
            flex: 1
        },
        {
            field: "Fav",
            header: "Fav",
            renderCell: (item) => {

                var itemCheck = favorites.find(q => q.id == item.id)
                if (itemCheck) {
                    return <Button onClick={() => favOperation(item.row)} variant="contained" color="error">{t("RemoveFromFavorites")}</Button>
                }
                else {
                    return <Button onClick={() => favOperation(item.row)} variant="contained" color="primary">{t("AddToFavorites")}</Button>
                }

            },
            flex: 2
        }
    ]


    return <>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <h1>{t("ProductsLength")}: {products.length}</h1>
            <Button onClick={() => navigate("/products/add")} size="large" variant="contained">{t("Add")}</Button>
        </Stack>
        <div style={{ height: 400 }}>
            <DataGrid
                rows={products}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </div>


    </>
}

export default List