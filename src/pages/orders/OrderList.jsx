import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

function OrderList() {

    const { orderReducer } = useSelector(state => state)

    const columns = [
        {
            field:"id",
            headerName:"Order ID",
            flex:1
        },
        {
            field:"customerId",
            headerName:"Customer ID",
            flex:1
        },
        {
            field:"orderDate",
            headerName:"Order Date",
            flex:1
        }
    ]

  return <>
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={orderReducer.orders}
            columns={columns}
        />
    </div>
  </>
}

export default OrderList