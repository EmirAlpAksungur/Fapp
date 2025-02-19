import axios from 'axios';
import TableComponent from "@/components/tableComponent";
import { useEffect, useState } from 'react';

export default function Table() {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/data");
            console.log(res.data.data);
            setData(res.data.data)
        } catch (error) {
            throw new Error("Veri alınamadı: " + error.message);
        }
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <TableComponent data={data} />
    );
}

