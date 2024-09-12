import { createContext, useEffect, useState } from "react";
import { getStorage, saveStorage } from "../utils/storageHelper";



export const FavoritesContext = createContext(null)


export const FavoritesProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([])


    useEffect(() => {

        var data = getStorage("favorites")
        console.log("data", data)
        if (data) {
            setfavorites(data)
        }

    }, [])


    //bu fonksiyon ürün favorilerde varsa ÇIKARIR yoksa EKLER
    const favOperation = (item) => {

        var favControl = favorites.find(q => q.id == item.id)

        if (favControl) {
            var filteredFavorites = favorites.filter(q => q.id != item.id)
            setfavorites(filteredFavorites)
            //state değiştikten sonra hemen localstorage da kayıt yapıyorum. (tarayıcı deposuna)
            saveStorage("favorites", filteredFavorites)
        }
        else {
            setfavorites([...favorites, item])
            //state değiştikten sonra hemen localstorage da kayıt yapıyorum. (tarayıcı deposuna)
            saveStorage("favorites", [...favorites, item])
        }
    }

    const empty = () => {
        setfavorites([])
    }


    return <FavoritesContext.Provider value={{ favorites, favOperation, empty }}>{children}</FavoritesContext.Provider>

}