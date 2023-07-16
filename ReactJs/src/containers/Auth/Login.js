import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
// import { FormattedMessage } from 'react-intl';

import { handleLogin } from '../../services/userServices';

class Login extends Component {
    constructor(props) {
        super(props);
        // Create state
        this.state = {
            username: '',
            password: '',
            showOfHidden: true,
            errMessage: ''
        }
    }

    handleOnChangeInput = (event, nameState) => {
        // Set state
        this.setState({
            // Tại sao lại dùng mảng? (vì mảng có thể truyền vào object, số, chuỗi,...)
            // Nhưng tại đây thằng state này là một object nên ta không thể truyền thẳng thằng nameState vào (nó sẽ hiểu rằng đây là một tham số có sẵn và sẽ chỉ thay đổi thằng nameState thôi)
            // Việc thêm thằng [nameState] vào thì nó có thể giúp cho mình sử dụng lại nó nhiều hơn
            [nameState]: event.target.value
        })
        //console.log(event.target.value);
    }

    handleLogin = async () => {
        let username = this.state.username;
        let password = this.state.password;

        this.setState({
            errMessage: ''
        })

        try {
            await handleLogin(username, password); // (Check được API thì mở network để kiếm tra)
        } catch (e) {
            console.log(e);
            this.setState({
                errMessage: e.message
            })
        }

        //console.log(`${username} + ${password}`)
    }

    handlePassword = () => {
        this.setState({
            showOfHidden: !this.state.showOfHidden // ! là phủ định VD: nếu như nó là true thì phủ định của true là false (còn phủ định của false thì sẽ là true)
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>Login</div>
                    <div className='user-name-container'>
                        <label>Username:</label>
                        <input type='text' placeholder='Enter your username' onChange={(event) => this.handleOnChangeInput(event, 'username')} />
                    </div>
                    <div className='password-container'>
                        <label>Password:</label>
                        <div className='password'>
                            <input type={this.state.showOfHidden ? 'password' : 'text'} placeholder='Enter your password' onChange={(event) => this.handleOnChangeInput(event, 'password')} />
                            <i class={this.state.showOfHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} onClick={() => this.handlePassword()}></i>
                        </div>
                    </div>
                    <span className='remind'>{this.state.errMessage}</span>
                    <button type='submit' className='login' onClick={() => this.handleLogin()}>Login</button>
                    <span className='forgot-password'>Forgot your password?</span>
                    <div className='login-options'>
                        <p>Or login with:</p>
                        <div className='options'>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-google"></i>
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
