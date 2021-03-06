import React from 'react';
import { withRouter } from 'react-router';

// Styles
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    console.log(history);
    console.log(match)
    console.log('Broken Line');
    return (
        <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`) }}>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >

            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);