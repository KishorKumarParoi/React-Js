import { useState } from "react";

const UseState = () => {
    const [number, setNumber] = useState(null);
    const change = () => {
        setNumber(number + 10);
    }
    return (
        <div>
            <h1>Number : {number}</h1>
            <button onClick={change} >Click</button>
        </div>
    );
};

export default UseState;