import React from 'react'
import useSuppliers from './hooks/useSuppliers'
import { DataGrid } from '@mui/x-data-grid'

function List() {

    const { suppliers } = useSuppliers()

    const columns = [
        {
            headerName: "ID",
            field: "id",
            flex: 1
        },
        {
            headerName: "Company",
            field: "companyName",
            flex: 2
        },
        {
            headerName: "Contact",
            field: "contactName",
            flex:2
        }
    ]

    return <>
        <div style={{ height: 400 }}>
            <DataGrid
                rows={suppliers}
                columns={columns}
            />
        </div>
    </>
}

export default List