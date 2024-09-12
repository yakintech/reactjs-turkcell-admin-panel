import { Button } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

function List() {

    const [products, setproducts] = useState([])

    const navigate = useNavigate()


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
            renderCell: (item) => <Button onClick={() => deleteProduct(item.row.id)} variant="contained" color="error">Delete</Button>,
            flex: 1
        },
        {
            field:"Detail",
            header:"Detail",
            renderCell:(item) => <><Button onClick={() => navigate(`/products/${item.row.id}`)} variant="contained">Detail</Button></>,
            flex:1
        }
    ]


    return <>
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