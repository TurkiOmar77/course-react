import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [Data,setData] = useState(null);
    const [isPinding ,setIsPinding] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
      const abortCont = new AbortController();
        setTimeout(()=>{
        fetch(url, {signal : abortCont.signal})
        .then(res=>{
          if(!res.ok){
            throw Error('could not fetch the data');
            
          }
          return res.json()
        })
        .then(data => {
          setData(data);
          setIsPinding(false);
          setError(null);
        })
        .catch(err =>{
          if(err.name === "AbortError"){
            console.log("fetch aborted");
          }else{
            setIsPinding(false);
            setError(err.message);
          }
        })
        },1000)
    },[url]);

    return {Data,isPinding,error}
}

export default useFetch;