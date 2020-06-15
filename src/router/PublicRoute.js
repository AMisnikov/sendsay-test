import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserAuth } from '../selectors/auth';

export const PublicRoute = ({ isAuth, children, ...otherProps }) => (
    <Route {...otherProps}>
        {
            !isAuth  ? (
                children
            ) : (
                <Redirect to='/app' />
            )
        }
    </Route>
);


const mapStateToProps = state => ({
    isAuth: isUserAuth(state)
});

export default connect(mapStateToProps)(PublicRoute);