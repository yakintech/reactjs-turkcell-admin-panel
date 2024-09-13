import { useEffect, useState } from "react";
import { axiosInstance } from "../../../config/axiosInstance";


function useSuppliers() {

    const [suppliers, setsuppliers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})


    useEffect(() => {

        axiosInstance.get("suppliers")
            .then(res => {
                setsuppliers(res.data)
                setloading(false)
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })

    }, [])

    return {suppliers, loading, error}

}

export default useSuppliers