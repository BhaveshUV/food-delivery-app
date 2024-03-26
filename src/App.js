import './App.css';
import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';

const App = () => {
    const [user, setUser] = useState("Bhavesh");
    return (
        <UserContext.Provider value={{ username: user, setUser }}>
            <div id='app' className='flex flex-col gap-4 md:gap-8 min-h-[100svh] min-h-[100dvh] min-h-[100vh] overflow-hidden'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
}

export default App;