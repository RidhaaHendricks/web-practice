import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    } else {
                        return res.json();
                    }
                })
                .then(data => {
                    setData(data);
                    setPending(false);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    }
                }) 

        }, 1000) // end of setTimeout

        // return the abort
        return () => abortCont.abort();
    }, [url]) // end of useEffect

    return { data, pending };

} // end of useFetch

export default useFetch;