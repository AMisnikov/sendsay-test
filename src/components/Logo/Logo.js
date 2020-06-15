import React from 'react';

const Logo = ({ className }) => (
    <div className={className ? `logo ${className}` : 'logo'}>
        <img src="/assets/img/logo.png" alt="logo" className="logo__img"/>
    </div>
);

export default Logo;