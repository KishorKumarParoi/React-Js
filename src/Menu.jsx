import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/effect">UseEffect</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                    <li><Link to="/contactForm">Contact Form</Link></li>
                    <li><Link to="/random">Random</Link></li>
                    <li><Link to="*">Not Found</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;