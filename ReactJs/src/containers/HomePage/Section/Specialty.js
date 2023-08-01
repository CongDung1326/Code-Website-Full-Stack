import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// CSS
import './Specialty.css'

import Slider from 'react-slick';

class Specialty extends Component {

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
                <div className='section-speciatly'>
                    <div className='specialty-content'>
                        <div className="container-slick">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.popular_specialty" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.see_more" /></button>
                            </div>
                            <Slider {...settings}>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
                                </div>
                                <div className='slick-img'>
                                    <img src="http://placekitten.com/g/400/200" alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
