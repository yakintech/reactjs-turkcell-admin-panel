import React, { useState } from 'react'
import MemoChild from './MemoChild'

function MemoParent() {

    const [counter, setcounter] = useState(0)

    console.log("MemoParent component rendered!")

    return <>
        <div>Memo Parent Components</div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <hr />
        <MemoChild/>
    </>
}

export default MemoParent