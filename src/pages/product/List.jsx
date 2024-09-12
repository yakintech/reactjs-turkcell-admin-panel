import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function List() {

    const [products, setproducts] = useState([])


    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/products")
            .then(res => setproducts(res.data))

    }, [])

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
            flex: 1
        },
        {
            field: "unitsInStock",
            headerName: "Stock",
            flex: 1
        }
    ]


    return <>
        <div style={{height:400}}>
            <DataGrid
                rows={products}
                columns={columns}
            />
        </div>


    </>
}

export default List