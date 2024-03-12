import './App.css';
import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';

const App = () => {
    const [user, setUser] = useState("Bhavesh");
    return (
        <UserContext.Provider value={{ username: user, setUser }}>
            <div id='app' className='flex flex-col gap-8 min-h-[100vh]'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
}

export default App;