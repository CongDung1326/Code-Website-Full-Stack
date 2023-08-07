import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';

class FeaturedDoctor extends Component {

    render() {
        let settings = this.props.settings;

        return (
            <>
                <div className='section-share section-featured-doctor'>
                    <div className='specialty-content'>
                        <div className="container-section">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.featured_doctor" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.find" /></button>
                            </div>
                            <Slider {...settings}>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://plus.unsplash.com/premium_photo-1675804669860-9e27f22b0681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn, // Các biến từ redux
        language: state.app.language, // state.app.language là ta lấy từ file appReducer.js
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedDoctor);
