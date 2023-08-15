import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { languages } from '../../../utils';

import Slider from 'react-slick';

class FeaturedDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doctors: [],
        }
    }

    componentDidMount() {
        this.props.getDoctorHomeStart(3);
    }

    componentDidUpdate(prevProps) {
        let { dataDoctorRedux } = this.props;
        if (prevProps.dataDoctorRedux !== dataDoctorRedux) {
            this.setState({
                doctors: dataDoctorRedux
            })
        }
    }

    render() {
        let { settings, language } = this.props;
        let { doctors } = this.state;
        doctors = doctors.concat(doctors).concat(doctors);

        console.log('Check doctor: ', doctors)
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
                                {doctors && doctors.length > 0 && doctors.map((doctor, index) => {
                                    let imageBase64 = '';
                                    if (doctor.image) {
                                        imageBase64 = new Buffer(doctor.image, 'base64').toString('binary');
                                    }
                                    return (
                                        <div className='section-img' key={index}>
                                            <div className='container-border'>
                                                <div className='avatar'>
                                                    <img src={imageBase64} alt='' />
                                                </div>
                                                <div className='introduce'>
                                                    <div className='degree'>{language === languages.VI ? doctor.positionData.valueVi : doctor.positionData.valueEn}, {doctor.firstName} {doctor.lastName}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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
        dataDoctorRedux: state.admin.dataDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDoctorHomeStart: (limit) => dispatch(actions.getDoctorHomeStart(limit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedDoctor);
