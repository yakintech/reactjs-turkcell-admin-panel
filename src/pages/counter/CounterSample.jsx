import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CounterSample() {

    const [counterValue, setcounterValue] = useState(0)

    //global store üzerindeki statelere useSelector ile erişirken. oradaki herhangi bir fonksiyonu ( reducerı ) useDispatch ile tetikliyorum.
    let dispatch = useDispatch();

    let { counterReducer } = useSelector(state => state)


    return <>
        <h1>{counterReducer.value}</h1>
        <hr />
        <button onClick={() => dispatch({ type: "counter/increase" })}>Increase</button>
        <button onClick={() => dispatch({ type: "counter/decrease" })}>Decrease</button>
        <hr />
        <div>
            <label htmlFor="">Value</label>
            <input type='text' value={counterValue} onChange={(e) => setcounterValue(e.target.value)} />
        </div>
        <button onClick={() => dispatch({ type: "counter/increaseByValue", payload: Number(counterValue)})}>Increase by Value</button >
    </>
}

export default CounterSample