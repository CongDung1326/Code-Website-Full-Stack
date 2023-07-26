import React, { Component } from 'react';
import { connect } from 'react-redux';

// img
import Logo from '../../../assets/images/header/logo.svg';
import Banner from '../../../assets/images/header/bg-header.jpg'

// CSS
import './Header.css'

class Header extends Component {

    render() {
        return (
            <>
                {/* Menu */}
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
                {/* Banner */}
                <div className='m-header-banner-container'>
                    <div className='m-header-banner-wrapper'>
                        <div className='m-header-banner-bg'>
                            <div className='m-find'>
                                <h1 className='m-top'>NỀN TẢNG Y TẾ</h1>
                                <h1 className='m-bottom'>CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</h1>
                                <div className='m-find-doctor'>
                                    <input type='text' placeholder='Tìm kiếm bác sĩ' />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className='m-download-app'>
                                <div className='m-google-play'></div>
                                <div className='m-app-store'></div>
                            </div>
                            <div className='m-options'>
                                <div className='option options-kham-chuyen-khoa'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-chuyen-khoa'>Khám chuyên khoa</div>
                                </div>
                                <div className='option options-kham-tu-xa'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-tu-xa'>Khám từ xa</div>
                                </div>
                                <div className='option options-kham-tong-quat'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-tong-quat'>Khám tổng quát</div>
                                </div>
                                <div className='option options-xet-nghiem-y-hoc'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='xet-nghiem-y-hoc'>Xét nghiệm y học</div>
                                </div>
                                <div className='option options-suc-khoe-tinh-than'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='suc-khoe-tinh-than'>Sức khoẻ tinh thần</div>
                                </div>
                                <div className='option options-kham-nha-khoa'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-nha-khoa'>Khám nha khoa</div>
                                </div>
                                <div className='option options-goi-phau-thuat'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='goi-phau-thuat'>Gói phẫu thuật</div>
                                </div>
                                <div className='option options-san-pham-y-te'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='san-pham-y-te'>Sản phẩm y tế</div>
                                </div>
                                <div className='option options-bai-test-suc-khoe'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='bai-test-suc-khoe'>Bài test sức khoẻ</div>
                                </div>
                                <div className='option options-y-te-gan-ban'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='y-te-gan-ban'>Y tế gần bạn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
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
