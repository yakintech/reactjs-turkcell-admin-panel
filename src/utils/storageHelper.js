

export const saveStorage = (key, data) => {

    //javascript objesine JSON a çevirip tarayıcımın localStorage kısmına kaydediyorum. Daha sonra kullanıcı tarayıcıyı yeniden açarsa favorileri storage içerisinden çekebilir.
    var storageData = JSON.stringify(data)
    localStorage.setItem(key, storageData)

}

export const getStorage = (key) => {
    
    var data = localStorage.getItem(key)

    if(data){
        //localstorage JSON objesini Javascript objesine çeviriyorum.
        var result = JSON.parse(data)
        return result
    }
    
    return [];
}