import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserAuth } from '../selectors/auth';

export const PrivateRoute = ({ isAuth, children, ...otherProps }) => (
    <Route {...otherProps}>
        {
            isAuth ? (
                children
            ) : (
                <Redirect to='/' />
            )
        }
    </Route>
);


const mapStateToProps = state => ({
    isAuth: isUserAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);