import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../../store/actions';
import { languages } from '../../../../utils';

import './ProfileDoctor.scss'

class ProfileDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profileDoctor: {},
        }
    }

    async componentDidMount() {
        let doctorId = this.props.doctorId;

        this.props.getProfileDoctorByIdStart(doctorId);
    }

    async componentDidUpdate(prevProps) {
        let { profileDoctorRedux, language } = this.props;

        if (prevProps.profileDoctorRedux !== profileDoctorRedux) {
            this.setState({
                profileDoctor: profileDoctorRedux,
            })
        }
    }

    changeNameDoctorIfChangeLanguage = () => {
        let { profileDoctor } = this.state;
        let { language } = this.props;
        let valueVi, valueEn = '';

        if (profileDoctor && profileDoctor.positionData) {
            valueVi = `${profileDoctor.positionData.valueVi}, ${profileDoctor.firstName} ${profileDoctor.lastName}`
            valueEn = `${profileDoctor.positionData.valueEn}, ${profileDoctor.lastName} ${profileDoctor.firstName}`
        }

        return (language === languages.VI) ? valueVi : valueEn
    }

    handleFormatNumber = (number) => {
        return new Intl.NumberFormat("de-DE").format(number);
    }

    render() {
        let { profileDoctor } = this.state;
        let { language } = this.props;

        return (
            <div className='profile-doctor-container'>
                <div className='profile-doctor'>
                    <div className='preview-image' style={{ backgroundImage: `url(${profileDoctor.image})` }}></div>
                    <div className='info-doctor'>
                        <div className='name'>{this.changeNameDoctorIfChangeLanguage()}</div>
                        <div className='description'>{profileDoctor && profileDoctor.Markdown ? profileDoctor.Markdown.description : ''}</div>
                    </div>
                </div>
                {profileDoctor && profileDoctor.DoctorInfo && profileDoctor.DoctorInfo.priceData && <div className='price'><FormattedMessage id="booking_modal.examination_price" />: {language === languages.VI ? this.handleFormatNumber(profileDoctor.DoctorInfo.priceData.valueVi) + 'đ' : this.handleFormatNumber(profileDoctor.DoctorInfo.priceData.valueEn) + 'USD'}</div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        profileDoctorRedux: state.admin.profileDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfileDoctorByIdStart: (id) => dispatch(actions.getProfileDoctorByIdStart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);