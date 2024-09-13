import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'

function List() {

  const { data, isLoading, error } = useQuery({
    queryKey: "categories",
    queryFn: () => {
      return axiosInstance.get("categories")
        .then(res => res.data)
    }
  })

  const columns = [
    {
      headerName: "Category ID",
      field: "id",
      flex: 1
    },
    {
      headerName: "Name",
      field: "name",
      flex: 2
    },
    {
      headerName: "Description",
      field: "description",
      flex: 2
    },
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