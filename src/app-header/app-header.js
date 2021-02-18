import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    
    return (
        <div className="app-header d-flex">
            <h1>Ilyaaaa Bolsh</h1>
            <h2>{allPosts} запесейб из них понравилось {liked} </h2>
        </div>
    );
}
export default AppHeader;
