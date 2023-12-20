import { useEffect, useState, useRef } from "react";

const UseEffect = () => {

    const [Data, SetData] = useState([]);

    useEffect(() => {
        (
            async () => {
                let response = await fetch('https://dummyjson.com/products/3')
                let data = await response.json();
                SetData(data);
            }
        )();
    }, [])

    return (
        <div>
            {JSON.stringify(Data)}
        </div>
    );
};

export default UseEffect;