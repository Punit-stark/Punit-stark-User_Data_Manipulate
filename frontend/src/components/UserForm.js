import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "./styles/UserForm.css"
import { toast } from 'react-toastify';

const UserForm = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            toast.error("Name is required");
            return;
        }

        try {
            await axios.post(`${window.location.origin}/api/addUser`, { name });
            navigate(`/buttons?name=${name}`);
            toast.success("User Added successfully!")
        } catch (error) {
            console.error(error);
            toast.error("server error")
        }
    };

    return (
        <div className="user-form">
            <h2>Enter User Name</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter user name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <p><Link to="/search">Search for a User</Link></p>
        </div>
    );
};

export default UserForm;
