import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../../actions/authActions';
import reducer from '../../validation/validationReducer';
import { setField, setFormValidity, setLoginErr, setFetchingStatus } from  '../../validation/validationActions';
import { getFieldErrors } from '../../validation/validationFunctions';
import Input from '../Input/Input';
import FormAlert from '../FormAlert/FormAlert';
import Loader from '../Loader/Loader';

const initialState = {
    login: {
        value: '',
        errors: [],
        isValid: false
    },
    sublogin: {
        value: '',
        errors: [],
        isValid: true
    },
    password: {
        value: '',
        errors: [],
        isValid: false
    },
    isFormValid: false,
    isFetching: false,
    loginErr: ''
};


export const LoginForm = ({ validationSchema, startLogIn }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if(state.login.isValid && state.sublogin.isValid && state.password.isValid) {
            dispatch(setFormValidity(true));
        } else {
            dispatch(setFormValidity(false));
        }

    }, [state.password, state.login, state.sublogin]);

    const handleInputChange = (e) => {
        if(state.loginErr) {
            dispatch(setLoginErr(''));
        }

        const name = e.target.name;
        const value = e.target.value.trim();
        const errors = getFieldErrors(name, value, validationSchema);
        
        dispatch(setField({
            name,
            data: {
                value,
                errors,
                isValid: errors.length > 0 ? false : true
            }
        }));
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(setFetchingStatus(true));

        startLogIn({
            login: state.login.value,
            sublogin: state.sublogin.value,
            password: state.password.value   
        }).catch(err => {
            
            dispatch(setFetchingStatus(false));

            const message = JSON.stringify({
                id: err.id,
                explain: err.explain
            });

            dispatch(setLoginErr(message));
        });
        
    };

    return (
        <div className="login-form">
            
            <form onSubmit={handleSubmit}  className="login-form__form">
                <h1 className="login-form__heading">API - консолька</h1>
                { state.loginErr && (
                    <FormAlert
                        title="Вход не вышел"
                        text={state.loginErr}
                    />
                )}
                <Input
                    className={ state.login.errors.length > 0 ? 'input--invalid' : ''}
                    id="login"
                    name="login"
                    labelText="Логин"
                    type="text"
                    errors={state.login.errors}
                    onChange={handleInputChange}
                    value={state.login.value}
                 />
                <Input
                    className={ state.sublogin.errors.length > 0 ? 'input--invalid' : ''}
                    id="sublogin"
                    name="sublogin"
                    labelText="Сублогин"
                    labelHint="Опционально"
                    type="text"
                    errors={state.sublogin.errors}
                    onChange={handleInputChange}
                    value={state.sublogin.value}
                 />
                 <Input
                    className={ state.password.errors.length > 0 ? 'input--invalid' : ''}
                    id="password"
                    name="password"
                    labelText="Пароль"
                    type="password"
                    errors={state.password.errors}
                    onChange={handleInputChange}
                    value={state.password.value}
                 />
        
                <button 
                    disabled={ !state.isFormValid || state.isFetching || state.loginErr ? true : false} 
                    className={ state.isFormValid && !state.loginErr ? "btn-primary" : "btn-primary btn-primary--disabled" } 
                    type="submit"
                >
                    { state.isFetching ? <Loader size={20} /> : 'Войти' }
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    startLogIn: (auth) => dispatch(startLogIn(auth))
});

export default connect(undefined, mapDispatchToProps)(LoginForm);