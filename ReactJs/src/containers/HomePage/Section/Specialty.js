import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';

import Slider from 'react-slick';

class Specialty extends Component {

    constructor(props) {
        super(props);

        this.state = {
            specialties: [],
        }
    }

    async componentDidMount() {
        await this.props.getAllSpecialtyStart();
    }

    componentDidUpdate(prevProps) {
        let { specialtiesRedux } = this.props;

        if (prevProps.specialtiesRedux !== specialtiesRedux) {
            this.setState({
                specialties: specialtiesRedux,
            })
        }
    }

    handleDetailSpecialty = (specialty) => {
        this.props.history.push(`/detail-specialty/${specialty.id}`);
    }

    render() {
        let { specialties } = this.state;
        let settings = this.props.settings;
        specialties = specialties.concat(specialties).concat(specialties).concat(specialties);

        return (
            <>
                <div className='section-share section-speciatly'>
                    <div className='specialty-content'>
                        <div className="container-section">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.popular_specialty" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.see_more" /></button>
                            </div>
                            <Slider {...settings}>
                                {(specialties && specialties.length > 0) ?
                                    specialties.map((item, index) => {
                                        return (
                                            <div onClick={() => this.handleDetailSpecialty(item)} className='section-img' key={index}>
                                                <img src={item.image} alt="" />
                                                <label>{item.name}</label>
                                            </div>
                                        )
                                    }) : ''
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
        specialtiesRedux: state.admin.specialties,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSpecialtyStart: () => dispatch(actions.getAllSpecialtyStart()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
