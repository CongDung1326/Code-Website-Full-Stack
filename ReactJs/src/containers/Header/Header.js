import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions"; // Do ta đã khai báo actions của redux rồi nên cũng không cần gọi thẳng chỉ cần actions rồi nó tự ra thôi
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';

// Redux
import { languages } from '../../utils/constant'

class Header extends Component {

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        console.log('>> check props ', this.props)

        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className='languages'>
                    <div className={language === languages.VI ? 'language-vi active' : 'language-vi'} onClick={() => this.handleChangeLanguage(languages.VI)}>VI</div>
                    <div className={language === languages.EN ? 'language-en active' : 'language-en'} onClick={() => this.handleChangeLanguage(languages.EN)}>EN</div>
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()), // Thằng này không có tham số truyền vào
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)) // Thằng này có tham số truyền vào
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
