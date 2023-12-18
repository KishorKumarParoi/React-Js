import { useState } from "react";

const UseState = () => {
    const [number, setNumber] = useState(10);
    const change = () => {
        setNumber(number + 10);
    }

    const [myObject, setMyObject] = useState({
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
    });
    const changeObj = () => {
        setMyObject(myObject => ({
            ...myObject,
            key1: 'new value 1',
            key2: 'new value 2'
        }));
    };

    return (
        <div>
            <h1>{myObject.key2}</h1>
            <button onClick={changeObj} >Change Object </button>
            <h1>Number : {number}</h1>
            <button onClick={change} >Change Number</button>
        </div>
    );
};

export default UseState;