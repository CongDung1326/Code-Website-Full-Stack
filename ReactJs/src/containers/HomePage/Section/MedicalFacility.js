import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';

import Slider from 'react-slick';

class MedicalFacility extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clinics: [],
        }
    }

    async componentDidMount() {
        await this.props.getAllClinicStart('ALL', 'ALL');
    }

    componentDidUpdate(prevProps) {
        let { clinicsRedux } = this.props;
        if (prevProps.clinicsRedux !== clinicsRedux) {
            this.setState({
                clinics: clinicsRedux,
            })
        }
    }

    handleDetailClinic = (clinic) => {
        this.props.history.push(`/detail-clinic/${clinic.id}`);
    }

    render() {
        let { clinics } = this.state;
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
        clinics = clinics.concat(clinics).concat(clinics).concat(clinics);

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
                                {clinics && clinics.length > 0 &&
                                    clinics.map((item, value) => {
                                        return (
                                            <div onClick={() => this.handleDetailClinic(item)} className='section-img' key={value} >
                                                {/* <img src={item.image} alt="" /> */}
                                                <div className='div-image' style={{ backgroundImage: `url(${item.image})` }}></div>
                                                <p className='name'>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
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
        clinicsRedux: state.admin.clinics,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllClinicStart: (id, location) => dispatch(actions.getAllClinicStart(id, location)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
