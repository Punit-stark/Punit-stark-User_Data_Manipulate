import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchUser = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`${window.location.origin}/api/getUser?name=${name}`);
            setUser(response.data);
            setError('');
        } catch (err) {
            setUser(null);
            if (err.response && err.response.status === 404) {
                setError('User not found');
            } else {
                setError('Server error');
            }
        }
    };

    return (
        <div className="search-user">
            <h2>Search User details by Name</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter user name"
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: {user.name}</p>
                    <p>Buttons: {user.buttons.join(', ')}</p>
                </div>
            )}
                        <p><Link to="/">Back to Home</Link></p>

        </div>
    );
};

export default SearchUser;
