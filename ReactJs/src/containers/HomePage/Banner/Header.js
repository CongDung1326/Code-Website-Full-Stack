import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Languages
import { languages } from '../../../utils'; // Do thằng index nên không cần phải vào thẳng file
import { changeLanguageApp } from '../../../store/actions'; // Do thằng index nên không cần phải vào thẳng file

// img
import Logo from '../../../assets/images/header/logo.svg';

// CSS
import './Header.css'

class Header extends Component {

    handleChangeLanguage = (language) => {
        //console.log('Event on click handle language: ', language);
        // fire redux event: actions
        this.props.changeLanguageAppRedux(language); // nên nhớ props này là của thằng redux không liên quan gì tới thằng cha truyền thằng con nhé!
    }

    render() {
        let language = this.props.language; // redux
        console.log('check language redux', language);

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
                                <p><FormattedMessage id="home_header.speciality" /></p>
                                <p><FormattedMessage id="home_header.search_dortor" /></p>
                            </div>
                            <div className='co-so-y-te'>
                                <p><FormattedMessage id="home_header.base" /></p>
                                <p><FormattedMessage id="home_header.choose_hospital" /></p>
                            </div>
                            <div className='bac-si'>
                                <p><FormattedMessage id="home_header.doctor" /></p>
                                <p><FormattedMessage id="home_header.choose_dortor" /></p>
                            </div>
                            <div className='goi-kham'>
                                <p><FormattedMessage id="home_header.examination_package" /></p>
                                <p><FormattedMessage id="home_header.general_health" /></p>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='m-support'>
                                <div className='support'>
                                    <i className="fa-solid fa-question"></i>
                                    <p><FormattedMessage id="home_header.support" /></p>
                                </div>
                                <div className='phone-number'>0346-976-586</div>
                            </div>
                            <div className='language'>
                                <h3 className={language === languages.VI ? 'language-vi action' : 'language-vi'} onClick={() => this.handleChangeLanguage(languages.VI)}>VI</h3>
                                <h3 className={language === languages.EN ? 'language-en action' : 'language-en'} onClick={() => this.handleChangeLanguage(languages.EN)}>EN</h3>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Banner */}
                <div className='m-header-banner-container'>
                    <div className='m-header-banner-wrapper'>
                        <div className='m-header-banner-bg'>
                            <div className='m-find'>
                                <h1 className='m-top'><FormattedMessage id="banner_header.title1" /></h1>
                                <h1 className='m-bottom'><FormattedMessage id="banner_header.title2" /></h1>
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
                                    <div className="option-name" form='kham-chuyen-khoa'><FormattedMessage id="banner_header.specialist_examination" /></div>
                                </div>
                                <div className='option options-kham-tu-xa'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-tu-xa'><FormattedMessage id="banner_header.remote_examination" /></div>
                                </div>
                                <div className='option options-kham-tong-quat'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-tong-quat'><FormattedMessage id="banner_header.general_examination" /></div>
                                </div>
                                <div className='option options-xet-nghiem-y-hoc'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='xet-nghiem-y-hoc'><FormattedMessage id="banner_header.medical_test" /></div>
                                </div>
                                <div className='option options-suc-khoe-tinh-than'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='suc-khoe-tinh-than'><FormattedMessage id="banner_header.mental_health" /></div>
                                </div>
                                <div className='option options-kham-nha-khoa'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='kham-nha-khoa'><FormattedMessage id="banner_header.dental_examination" /></div>
                                </div>
                                <div className='option options-goi-phau-thuat'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='goi-phau-thuat'><FormattedMessage id="banner_header.surgery_pack" /></div>
                                </div>
                                <div className='option options-san-pham-y-te'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='san-pham-y-te'><FormattedMessage id="banner_header.medical_products" /></div>
                                </div>
                                <div className='option options-bai-test-suc-khoe'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='bai-test-suc-khoe'><FormattedMessage id="banner_header.health_test" /></div>
                                </div>
                                <div className='option options-y-te-gan-ban'>
                                    <div className='img'><span></span></div>
                                    <div className="option-name" form='y-te-gan-ban'><FormattedMessage id="banner_header.healthcare_near_you" /></div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
