import React from 'react'
import useSWR from 'swr'
import { axiosInstance } from '../../config/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'

function List() {

    const { data, error, isLoading } = useSWR("/customers", () => {
        return axiosInstance.get("customers")
            .then(res => res.data)
    })

    const columns = [
        {
            headerName: "Customer ID",
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
            flex: 2
        }
    ]

    return <>
        <div style={{ height: 400 }}>
            <DataGrid
                rows={data}
                columns={columns}
            />
        </div>
    </>
}

export default List