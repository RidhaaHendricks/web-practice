import { useState, useEffect } from "react";

const useFetchEmp = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }, {
                method: 'GET',
                headers: { "Content-Type": 'application/json'}
            })
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
                }) // end of setTimeout

        }, 1000) // end of useEffect

        // return the abort
        return () => abortCont.abort();
    }, [url])

    return { data, pending };

} // end of useFetchEmp

export default useFetchEmp;