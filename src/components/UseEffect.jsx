import { useEffect, useState, useRef } from "react";

const UseEffect = () => {

    useEffect(()=>{
        console.log('Hello KKP!')
    }, [2, 5,7,8]);

    return (
        <div>

        </div>
    );
};

export default UseEffect;