import React from 'react';
import validationSchema from '../..//validation/validationSchema';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {

    return (
        <div className="wrapper">
            <div className="login">
                <Logo className="login__logo"/>
                <LoginForm 
                    validationSchema={validationSchema}
                />
                <a href="https://github.com/AMisnikov/sendsay-test" target="_blank" className="link login__link">@AMisnikov</a>
            </div>
        </div>
    );
};

export default LoginPage;