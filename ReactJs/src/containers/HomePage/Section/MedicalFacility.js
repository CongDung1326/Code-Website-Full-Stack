import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// CSS
import './MedicalFacility.scss'

import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 855,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }]
        };

        return (
            <>
                <div className='section-share section-medical-facility'>
                    <div className='specialty-content'>
                        <div className="container-section">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.medical_facility" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.find" /></button>
                            </div>
                            <Slider {...settings}>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
                                </div>
                                <div className='section-img'>
                                    <img src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg" alt="" />
                                    <p className='name'><FormattedMessage id="slick.medical_facility_name.viet_duc" /></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
