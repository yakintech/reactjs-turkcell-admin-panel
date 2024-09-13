import React, { useEffect } from 'react'

function Home() {


    useEffect(() => {

        let interval = setInterval(() => {
            console.log("Hello")
        }, 1000);

        //use effect cleanup function. Component dispose oldugunda çalışır!
        return () => {
            clearInterval(interval)
        }

    }, [])



    return (
        <div>Home Page</div>
    )
}

export default Home