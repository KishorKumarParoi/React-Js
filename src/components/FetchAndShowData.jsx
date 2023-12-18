import { useRef } from "react";

const FetchAndShowData = () => {
    let expensiveResultRef = useRef(null);
    let myDiv = useRef();

    const fetchData =  async ()=> {
        const response = await fetch('https://dummyjson.com/products');
        expensiveResultRef.current = await response.json();
    }

    const showData = ()=> {
        myDiv.current.innerHTML = JSON.stringify(expensiveResultRef);
    }

    return (
        <div>
            <div ref= {myDiv}></div>
            <button onClick={fetchData} >Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default FetchAndShowData;