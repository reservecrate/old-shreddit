import React from 'react';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';

const MainContent = () => {
    return (
        <div id='main-content'>
            <Feed />
            <Sidebar />
        </div>
    );
};

export default MainContent;
