import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const ButtonPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name');

    const handleClick = async (buttonName) => {
        try {
            await axios.post(`${window.location.origin}/api/addButton`, { name, button: buttonName });
            toast.success(`${buttonName} saved successfully`)
        } catch (error) {
            console.error(error);
            toast.error("Server error");
        }
    };

    return (
        <div className="button-page">
            <h2>Select a Button</h2>
            {['button-1', 'button-2', 'button-3', 'button-4', 'button-5'].map(button => (
                <button key={button} onClick={() => handleClick(button)}>{button}</button>
            ))}
            <p><Link to="/search">Search for a User</Link></p>
        </div>
    );
};

export default ButtonPage;
