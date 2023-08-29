import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Header from '../../Banner/Header';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorInfo from '../Doctor/DoctorInfo';
import ProfileDoctor from '../Doctor/ProfileDoctor';
// SCSS
import './DetailSpecialty.scss'

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrDoctorId: [19, 20, 21],
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    render() {
        let { arrDoctorId } = this.state;

        return (
            <>
                <Header />
                <div className='detail-specialty-container'>
                    {arrDoctorId && arrDoctorId.length &&
                        arrDoctorId.map((item, index) => {
                            return (
                                <div className='doctor' key={index}>
                                    <div className='left'>
                                        <ProfileDoctor doctorId={item} isShowDescript={false} />
                                    </div>
                                    <div className='right'>
                                        <DoctorSchedule doctorId={item} />
                                        <DoctorInfo doctorId={item} />
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);