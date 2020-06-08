import React from 'react';
import { connect } from 'react-redux';

export const User = ({ user, className }) => (
    <div className={className ? `user ${className}` : 'user'}>
        <span className="user__login">{user.login}</span>
        { user.sublogin && (
            <>
                <span className="user__colon">:</span>
                <span className="user__sublogin">{ user.sublogin }</span>
            </>
        ) }
    </div>

);

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(User);