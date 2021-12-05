import { useState,useEffect } from "react";
import { useHistory } from "react-router";

const  useFetch = (url) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const[error,setError]=useState(null)
    const history = useHistory()
    const abrtcont=new AbortController()

    useEffect(()=>{       
            fetch(url,{signal: abrtcont.signal})
            .then(res=>{
                if(!res.ok) {
                    if(res.status === 404){
                        history.push('/xcwxcdsds')
                    }
                    throw Error("could not fetch the data")
                }
                return res.json();
            })
            .then(data=>{
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                //bech el error elli tab3thou el fetch me ilancich el seteError => toufa 5edmet el fetch 
                if (err.name!=="AbortError") 
                {setError(err.message)
                setData(null)
                setLoading(false)}
            })
        
        return () => abrtcont.abort() 
    },[url,data])

    return {data,loading,error} ;
}

export default useFetch ;