import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footerComponent">
            <p>{props.message}</p>
        </footer>
    );
};

export default Footer;