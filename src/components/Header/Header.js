import React from 'react';
import Logo from '../Logo/Logo';
import User from '../User/User';
import BtnLogout from '../BtnLogout/BtnLogout';
import BtnToggleScreen from '../BtnToggleScreen/BtnToggleScreen';

const Header = () => (
    <header className="header">
        <Logo className="header__logo"/>
        <h1 className="main-heading">API - консолька</h1>
        <div className="header__actions">
            <User  />
            <BtnLogout className="header__btn-logout" />
            <BtnToggleScreen className="header__btn-toggle-screen" />
        </div>
    </header>
);


export default Header;