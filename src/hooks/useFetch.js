import { useEffect, useState } from "react";

export const useFetch = (url, reload) => { 
    
    const [data, setData] = useState(null);

    // Used to show progress in view
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        const fetchData = async () => {
            setLoading(true);

            const response = await fetch(url);
            const json = await response.json();
            
            setData(json);

            setLoading(false);
        };

        fetchData();
    
    }, [url, reload]);

    return {data, loading};
};