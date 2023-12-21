import { NavLink } from "react-router-dom";
import './assets/css/style.css'

const Menu = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/tailwind">Tailwind</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/effect">UseEffect</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/todo">Todo</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/form">Form</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/demo">Demo</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/contactForm">Contact Form</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/random">Random</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="*">Not Found</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;