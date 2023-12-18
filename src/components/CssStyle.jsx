import { useRef } from "react";

const CssStyle = () => {

    let myHeadline = useRef();
    let number = useRef(0);

    const change = () => {
        myHeadline.classList.remove('text-success');
        myHeadline.classList.add("text-danger");
        number.current++;
        console.log(number);
    };

    return (
        <div>
            <h1 className="text-success" ref={(a) => myHeadline = a}>I am Kishor Kumar Paroi</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default CssStyle;