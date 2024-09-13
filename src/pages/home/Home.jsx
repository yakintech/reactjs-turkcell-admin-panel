import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function Home() {

    //react-redux içerisinde bulunan useSelector ile global statee erişim sağlıyorum.
    const globalStore = useSelector(state => state)

    console.log("globalState", globalStore)
    useEffect(() => {

        let interval = setInterval(() => {
            //console.log("Hello")
        }, 1000);

        //use effect cleanup function. Component dispose oldugunda çalışır!
        return () => {
            clearInterval(interval)
        }

    }, [])



    return <>
        <h1>Counter: {globalStore.counterReducer.value}</h1>
    </>
}

export default Home