import React from 'react';

const Header = (props) => {
    return (
        <header className="headerComponent">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </header>
    );
};

export default Header;