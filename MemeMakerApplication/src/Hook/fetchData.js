import { useState, useEffect } from "react";
import axios from 'axios';

function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [veri, setVeri] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setVeri(responseData);
            setLoading(false);
        }
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { veri, loading, error };
};

export default useFetch;