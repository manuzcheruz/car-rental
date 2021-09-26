import { useEffect, useState } from "react";

function DataFetch(url: string) {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [data, url])

    return data;
}

export default DataFetch;