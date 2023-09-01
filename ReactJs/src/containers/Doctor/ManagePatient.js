import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import DatePicker from '../../components/Input/DatePicker'
import * as actions from '../../store/actions';
// SCSS
import './ManagePatient.scss';
import { languages } from '../../utils';
import moment from 'moment';

class ManagePatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            patientBooking: [],
        }
    }

    async componentDidMount() {
        let { userInfo } = this.props;
        let { currentDate } = this.state;
        let date = new Date(currentDate).getTime();

        if (userInfo) {
            await this.props.getPatientForDoctorStart(userInfo.id, date);
        }
    }

    componentDidUpdate(prevProps) {
        let { patientBookingRedux } = this.props;
        if (prevProps.patientBookingRedux !== patientBookingRedux) {
            this.setState({
                patientBooking: patientBookingRedux,
            })
        }
    }

    handleOnChangeDatePicker = async (value) => {
        let date = moment(value[0]).startOf('day').valueOf();
        let { userInfo } = this.props;

        if (userInfo) {
            await this.props.getPatientForDoctorStart(userInfo.id, date);
        }
    }

    render() {
        let { patientBooking } = this.state;
        let { language } = this.props;

        return (
            <div className='manage-patient-container'>
                <div className='title'>Quản lý lịch khám</div>
                <div className='date'>
                    <label><FormattedMessage id="manage_patient.choose_date_examination" /></label>
                    <DatePicker onChange={this.handleOnChangeDatePicker} value={this.state.currentDate} />
                </div>
                <div className='calendar'>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th><FormattedMessage id="manage_patient.time" /></th>
                                <th><FormattedMessage id="manage_patient.fullName" /></th>
                                <th><FormattedMessage id="manage_patient.address" /></th>
                                <th><FormattedMessage id="manage_patient.gender" /></th>
                                <th><FormattedMessage id="manage_patient.actions" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientBooking && patientBooking.length > 0 ?
                                patientBooking.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{language === languages.VI ? item.timePatient.valueVi : item.timePatient.valueEn}</td>
                                            <td>{item.patientData.lastName}</td>
                                            <td>{item.patientData.address}</td>
                                            <td>{language === languages.VI ? item.patientData.genderData.valueVi : item.patientData.genderData.valueEn}</td>
                                            <td>
                                                <button><FormattedMessage id="manage_patient.confirm" /></button>
                                                <button className='invoice'><FormattedMessage id="manage_patient.invoice" /></button>
                                            </td>
                                        </tr>
                                    )
                                }) : 'No data'
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        patientBookingRedux: state.admin.patientBooking,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPatientForDoctorStart: (doctorId, date) => dispatch(actions.getPatientForDoctorStart(doctorId, date)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);