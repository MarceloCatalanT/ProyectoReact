import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getData()
    },[])
    return [data]
    
}

export default useFetch