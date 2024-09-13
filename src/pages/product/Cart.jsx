import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {

    const { cartReducer } = useSelector(state => state)

    let dispatch = useDispatch()


    let totalPrice = 0;

    cartReducer.cart.forEach(element => {
        totalPrice = totalPrice + (element.unitPrice * element.quantity)
    });

    return <>
        <h3>Total Price: {totalPrice}</h3>
        <hr />
        <Button onClick={() => dispatch({ type: "cart/empty" })} variant="contained" color="error">Empty</Button>
        <hr />
        <ul>
            {
                cartReducer.cart.map(item => {
                    return <>
                        <li>{item.name} - {item.quantity} * {item.unitPrice.toFixed} = {(item.quantity * item.unitPrice).toFixed(2)}

                            <Button onClick={() => dispatch({ type: "cart/removeFromCart", payload: item })}>Remove from Cart</Button>
                        </li>
                    </>
                })
            }
        </ul>
    </>
}

export default Cart