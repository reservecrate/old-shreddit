import React from 'react';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';

export const MainContent = () => {
    return (
        <div id='main-content'>
            <Feed />
            <Sidebar />
        </div>
    );
};