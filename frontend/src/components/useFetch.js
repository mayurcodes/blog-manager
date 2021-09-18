import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCntrl = new AbortController();

        fetch(url, { signal : abortCntrl.signal })
        .then( res => {
            if(!res.ok){
                throw Error("Sorry!! Could not load the data from resource");
            }
            return res.json();
        })
        .then( data => {
            setData(data);
            setIsPending(false);
            setError(false);
      })
        .catch( err => {
                if(err.name === "AbortError"){
                    console.log("fetch aborted");
                }else{
                setIsPending(false);
                setError(err.message);
                // setData(null); 
                }
        });

        return () => abortCntrl.abort();
    }, [url]);

    return { data, isPending, error }

    // used settimeout to display loading for more time
    // useEffect( () => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blog')
    //     .then( res => {
    //         return res.json();
    //     })
    //     .then( data => {
    //         setData(data);
    //         setIsPending(false);
    //     });
    //     }, 500);
    // }, []);
}

export default useFetch;