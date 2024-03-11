import './App.css';
import React from 'react';
import { Header } from "./components/Header";
import Body from './components/Body';

const App = () => {
    return (
        <div id='app' className='flex flex-col gap-8 min-h-[100vh]'>
            <Header />
            <Body />
        </div>
    );
}

export default App;