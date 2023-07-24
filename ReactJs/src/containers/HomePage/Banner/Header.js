import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../../../assets/images/logo.svg';

// SCSS
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className='m-header-container'>
                <nav className='menu'>
                    <div className='left'>
                        <ul>
                            <li className='bars'><i className="fa-solid fa-bars"></i></li>
                            <li className='header-logo'><img src={Logo} alt='logo' /></li>
                        </ul>
                    </div>
                    <div className='m-center'>
                        <div className='chuyen-khoa'>
                            <p>Chuyên khoa</p>
                            <p>Tìm bác sĩ theo chuyên khoa</p>
                        </div>
                        <div className='co-so-y-te'>
                            <p>Cơ sở y tế</p>
                            <p>Chọn bệnh viện văn phòng</p>
                        </div>
                        <div className='bac-si'>
                            <p>Bác sĩ</p>
                            <p>Chọn bác sĩ giỏi</p>
                        </div>
                        <div className='goi-kham'>
                            <p>Gói khám</p>
                            <p>Khám sức khoẻ tổng quát</p>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='support'>
                            <i className="fa-solid fa-question"></i>
                            <p>Hỗ trợ</p>
                        </div>
                        <div className='phone-number'>0346-976-586</div>
                    </div>
                </nav>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
