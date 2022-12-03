import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className="header" >
            <div className="header-logo">
                <img alt="PhimMoi" src="https://www.cophimmoi.net/wp-content/uploads/2022/10/logo.png" />
            </div>
            <div className="search">
                <div className="login">
                    <button className='button'>login</button>
                </div>
            </div>
        </div>
    )
}

export default Header
