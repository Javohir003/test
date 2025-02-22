import { useEffect, useState } from "react"

export function UserFetch(url) {
    const [data, setData] = useState(null);
    useEffect(()=> {
        const fetchData = async() => {
            try{
                const request = await fetch(url)
                const response = await request.json()
                setData(response)
            }catch(error){
                console.error(`Sizda Xatolik mavjud, ${error}`);
                
            }
        }
        fetchData()
    }, [])


  return { data }
}
