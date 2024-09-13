import React from 'react'

function MemoChild() {

    console.log("Child component rendered!")

    let date = new Date()

    return <>
        <div>Child: {date.toLocaleTimeString()}</div>
    </>
}

export default React.memo(MemoChild)