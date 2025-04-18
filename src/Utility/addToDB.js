const getDataFormDB = ()=>{
    const bookData = localStorage.getItem('readList')
    return bookData ? JSON.parse(bookData) : []
}
const addDataToDB = (id)=>{

    const bookData = getDataFormDB()

    if(bookData.includes(id)){
        alert(id  + ' Data already exists')
    }else{
        bookData.push(id)
        const data = JSON.stringify(bookData)
        localStorage.setItem('readList',data)
    }

}

export {addDataToDB}