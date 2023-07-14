import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>Login</div>
                    <div className='user-name'>
                        <label>Username:</label>
                        <input type='text' placeholder='Enter your username' />
                    </div>
                    <div className='password'>
                        <label>Password:</label>
                        <input type='password' placeholder='Enter your password' />
                    </div>
                    <button type='submit' className='login'>Login</button>
                    <span className='forgot-password'>Forgot your password?</span>
                    <div className='login-options'>
                        <p>Or login with:</p>
                        <div className='options'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
