import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';

class Handbook extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 855,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }]
        };

        return (
            <>
                <div className='section-share section-handbook'>
                    <div className='specialty-content'>
                        <div className="container-section">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.handbook" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.all_posts" /></button>
                            </div>
                            <Slider {...settings}>
                                <div className='handbook-box'>
                                    <img src="https://cdn.bookingcare.vn/fr/w300/2023/08/02/174635-roi-loan-nhip-tim-cover.png" alt='' />
                                    <div className='handbook-text'><h3>Rối loạn nhịp tim: Triệu chứng, nguyên nhân và cách điều trị</h3></div>
                                </div>
                                <div className='handbook-box'>
                                    <img src="https://cdn.bookingcare.vn/fr/w300/2023/08/02/174635-roi-loan-nhip-tim-cover.png" alt='' />
                                    <div className='handbook-text'><h3>Rối loạn nhịp tim: Triệu chứng, nguyên nhân và cách điều trị</h3></div>
                                </div>
                                <div className='handbook-box'>
                                    <img src="https://cdn.bookingcare.vn/fr/w300/2023/08/02/174635-roi-loan-nhip-tim-cover.png" alt='' />
                                    <div className='handbook-text'><h3>Rối loạn nhịp tim: Triệu chứng, nguyên nhân và cách điều trị</h3></div>
                                </div>
                                <div className='handbook-box'>
                                    <img src="https://cdn.bookingcare.vn/fr/w300/2023/08/02/174635-roi-loan-nhip-tim-cover.png" alt='' />
                                    <div className='handbook-text'><h3>Rối loạn nhịp tim: Triệu chứng, nguyên nhân và cách điều trị</h3></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
