
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
    return (
        <div>
            <input type="text" />
            <button>Submit</button> <br />
            {
                loginStatus(false)
            }
            <form action="" onSubmit={postFormData}>
                <p>Enter Your Name : <input type="text" />
                    <button style={{
                        marginLeft: "10px"
                    }} >Send</button>
                </p>
            </form>
        </div>
    );
};

export default contactForm;