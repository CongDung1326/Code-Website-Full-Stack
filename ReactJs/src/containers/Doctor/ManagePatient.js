import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import DatePicker from '../../components/Input/DatePicker'
import * as actions from '../../store/actions';
// SCSS
import './ManagePatient.scss';
import { languages } from '../../utils';
import moment from 'moment';
import RemedyModal from './RemedyModal';
import { toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay';
import Loading from '../../components/Loading';

class ManagePatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            patientBooking: [],
            isOpenRemedy: false,
            dataPatient: null,
            isOpenLoading: false,
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
        let { patientBookingRedux, isSendRemedy } = this.props;
        if (prevProps.patientBookingRedux !== patientBookingRedux) {
            this.setState({
                patientBooking: patientBookingRedux,
            })
        }
        if (prevProps.isSendRemedy !== isSendRemedy) {
            console.log('Check: ', isSendRemedy)
            this.setState({
                isSuccess: isSendRemedy,
            })
        }
    }

    handleOnChangeDatePicker = async (value) => {
        let date = moment(value[0]).startOf('day').valueOf();
        this.setState({
            currentDate: date,
        })
        let { userInfo } = this.props;

        if (userInfo) {
            await this.props.getPatientForDoctorStart(userInfo.id, date);
        }
    }

    handleOnClickCofirm = (item) => {
        let toggle = this.state.isOpenRemedy;
        console.log("Check item: ", item)

        this.setState({
            isOpenRemedy: !toggle,
            dataPatient: item,
        });
    }

    sendRemedy = async (item) => {
        let { dataPatient, currentDate } = this.state;
        let { userInfo, language } = this.props;
        this.setState({
            isOpenLoading: true,
        })
        if (dataPatient && item.email && item.imgBase64) {
            await this.props.postSendRemedyStart({
                doctorId: dataPatient.doctorId,
                patientId: dataPatient.patientId,
                timeType: dataPatient.timeType,
                email: item.email,
                image: item.imgBase64,
                date: currentDate,
                language: language,
                fullName: dataPatient.patientData.lastName,
            })

            if (userInfo) {
                await this.props.getPatientForDoctorStart(userInfo.id, currentDate);
                this.setState({
                    isOpenRemedy: false,
                })
                toast.success('Send remedy success!');
            }
        } else {
            toast.error('Wrongs...')
        }
        this.setState({
            isOpenLoading: false,
        })
    }

    render() {
        let { patientBooking, isOpenRemedy, dataPatient, isOpenLoading } = this.state;
        let { language } = this.props;

        return (
            <>
                <Loading isOpen={isOpenLoading} />
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
                                                    <button onClick={() => this.handleOnClickCofirm(item)}><FormattedMessage id="manage_patient.confirm" /></button>
                                                </td>
                                            </tr>
                                        )
                                    }) : <tr><td>No data</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <RemedyModal sendRemedy={this.sendRemedy} dataPatient={dataPatient} toggle={this.handleOnClickCofirm} isOpen={isOpenRemedy} className="send-medicine-patient-modal" />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        patientBookingRedux: state.admin.patientBooking,
        userInfo: state.user.userInfo,
        isSendRemedy: state.admin.isSendRemedy,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPatientForDoctorStart: (doctorId, date) => dispatch(actions.getPatientForDoctorStart(doctorId, date)),
        postSendRemedyStart: (data) => dispatch(actions.postSendRemedyStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);