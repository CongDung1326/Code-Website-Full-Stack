import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../store/actions';
import { languages } from '../../../../utils';
import localization from 'moment/locale/vi';
import { getScheduleByDate } from '../../../../services/userServices';
import { FormattedMessage } from 'react-intl';
import BookingModal from './Modal/BookingModal';
import moment from 'moment';

import './DoctorSchedule.scss'

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allDays: [],
            dataTimeSchedule: [],
            isOpenScheduleTime: false,
            dataScheduleTime: {},
        }
    }

    async componentDidMount() {
        let arrDate = this.getAllDate();
        let { doctorId } = this.props;
        this.setState({
            allDays: arrDate,
        });

        // Load component
        if (doctorId) {
            let date = arrDate[0].value;
            let res = await getScheduleByDate(doctorId, date)

            if (res && res.errCode === 0) {
                this.setState({
                    dataTimeSchedule: res.data,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        let { language, doctorId } = this.props;
        let allDate = this.getAllDate();

        if (prevProps.language !== language) {
            this.setState({
                allDays: allDate
            })
        }

        if (prevProps.doctorId !== doctorId) {
            let doctorId = this.props.doctorId;
            let date = allDate[0].value;
            let res = await getScheduleByDate(doctorId, date)

            if (res && res.errCode === 0) {
                this.setState({
                    dataTimeSchedule: res.data,
                })
            }
        }
    }

    getAllDate = () => {
        let { language } = this.props;
        let arrDate = [];

        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === languages.VI) {
                if (i === 0) {
                    let text = 'Hôm nay - ' + moment(new Date()).format('DD/MM');
                    object.label = text;
                } else {
                    object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
                }
            } else {
                if (i === 0) {
                    let text = 'Today - ' + moment(new Date()).locale('en').format('DD/MM');
                    object.label = text;
                } else {
                    object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
                }
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            arrDate.push(object);
        }

        return arrDate;
    }

    handleChangeDate = async (e) => {
        if (this.props.doctorId) {
            let doctorId = this.props.doctorId;
            let date = e.target.value;
            let res = await getScheduleByDate(doctorId, date)

            if (res && res.errCode === 0) {
                this.setState({
                    dataTimeSchedule: res.data,
                })
            }
        }
    }

    toggleBookingModal = (item) => {
        let toggle = this.state.isOpenScheduleTime;

        this.setState({
            isOpenScheduleTime: !toggle,
            dataScheduleTime: item,
        });
    }

    render() {
        let { language } = this.props;
        let { allDays, dataTimeSchedule } = this.state;

        return (
            <>
                <div className='doctor-schedule-container'>
                    <div className='day-schedule'>
                        <select onChange={(e) => this.handleChangeDate(e)}>
                            {allDays && allDays.length > 0 && allDays.map((item, index) => {
                                return (
                                    <option value={item.value} key={index}>{item.label}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='examination-schedule'>
                        <h4><i className="fa-solid fa-calendar-days"></i> <FormattedMessage id="doctor_schedule.examination_schedule" /></h4>
                        <div className='time-schedule'>
                            {(dataTimeSchedule && dataTimeSchedule.length > 0) ? dataTimeSchedule.map((item, index) => {
                                return (
                                    <button onClick={() => this.toggleBookingModal(item)} key={index}>{language === languages.VI ? item.timeData.valueVi : item.timeData.valueEn}</button>
                                )
                            }) : <div><FormattedMessage id="doctor_schedule.is_not_schedule" /></div>}
                        </div>
                        <div className='choice'>{(dataTimeSchedule && dataTimeSchedule.length > 0) ? <FormattedMessage id="doctor_schedule.choice" /> : ''}</div>
                    </div>
                </div>

                <BookingModal doctorId={this.props.doctorId} dataScheduleTime={this.state.dataScheduleTime} isOpen={this.state.isOpenScheduleTime} toggle={this.toggleBookingModal} className="modal-shedule-container" />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        detailDoctorRedux: state.admin.detailDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);