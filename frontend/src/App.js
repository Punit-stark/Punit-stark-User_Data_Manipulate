import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import ButtonPage from './components/ButtonPage';
import SearchUser from './components/SearchUser';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
             
            <div className="App">
            <ToastContainer />
                <header className="App-header">
                    <h1>Welcome to User Button App</h1>
                </header>
                <Routes>
                    <Route path="/" element={<UserForm />} />
                    <Route path="/buttons" element={<ButtonPage />} />
                    <Route path="/search" element={<SearchUser />} /> {/* Add this line */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
