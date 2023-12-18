/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";

const contactForm = () => {
    const loginStatus = (status) => {
        if (status) {
            return <button>Logout Btn</button>
        } else {
            return <button>Login Btn</button>
        }
    }

    const postFormData = (event) => {
        event.preventDefault();
        alert('You Sent Your Name to Server')
    }

    let inputVal = useRef();
    let Name = useRef();

    const change = () => {
        // Name.current.innerText = document.getElementById('name').value;
        Name.innerText = inputVal.current.value;
    }

    return (
        <div>
            {
                loginStatus(false)
            }
            <form action="" onSubmit={postFormData} >
                <p>Enter Your Name : <input type="text" id="name" ref={inputVal} />
                    <button style={{
                        marginLeft: "10px"
                    }} onClick={change} >Send</button>
                </p>
            </form>

            <p ref={(p) => Name = p}></p>

        </div>
    );
};

export default contactForm;