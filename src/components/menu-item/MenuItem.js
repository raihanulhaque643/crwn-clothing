import React from 'react';
import './menu-item.scss';

function MenuItem({title, imageUrl, size}) {
    return (
        <div
        className={`${size} menu-item`}
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;
