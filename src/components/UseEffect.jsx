import { useEffect, useState, useRef } from "react";

const UseEffect = () => {

    const [Data, SetData] = useState([]);
    const headline = useRef();

    const change = () => {
        headline.current.style.color = 'blue';
    }
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
            <h1 ref={headline}>I have to do hard work for Learning</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseEffect;