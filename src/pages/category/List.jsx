import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function List() {

  const { data, isLoading, error } = useQuery({
    queryKey: "categories",
    queryFn: () => {
      return axiosInstance.get("categories")
        .then(res => res.data)
    }
  })

  const navigate = useNavigate()

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
  <div style={{display:'flex', justifyContent:'flex-end'}}>
    <Button variant="contained" onClick={() => navigate("/categories/add")}>Add</Button>
  </div>
  <hr />
    <div style={{ height: 400 }}>
      <DataGrid
        rows={data}
        columns={columns}
      />
    </div>
  </>
}

export default List