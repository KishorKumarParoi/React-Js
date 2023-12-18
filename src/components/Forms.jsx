import { useRef } from "react";

const Forms = () => {
    let firstName, lastName = useRef();
    const postFormData = (event) => {
        event.preventDefault();
    }

    let fullName = useRef();

    const change = ()=> {
       fullName.innerText =`Name :  ${firstName.value} ${lastName.value}`;
    }
    return (
        <div>
            <form action="" onSubmit={postFormData}>
                <p>Enter First Name : <input type="text" placeholder="First Name" ref={(a) => firstName = a} /></p>
                <p>Enter Last Name : <input type="text" placeholder="Last Name" ref={(a) => lastName = a} /></p>
                <button onClick={change}>Submit</button>
                <p ref={(a)=> fullName = a}></p>
            </form>
        </div>
    );
};

export default Forms;