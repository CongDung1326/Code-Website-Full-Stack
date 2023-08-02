import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Banner/Header';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import FeaturedDoctor from './Section/FeaturedDoctor';

import './HomePage.scss'

class HomePage extends Component {
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
            <div>
                <Header />
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <FeaturedDoctor settings={settings} />
            </div>
        );
    }

}

// Thằng này để có thể sử dụng Redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
        // inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
