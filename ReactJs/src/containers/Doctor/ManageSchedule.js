import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../store/actions';
import { languages } from '../../utils/constant';
// Select
import Select from 'react-select';

import DatePicker from '../../components/Input/DatePicker';

// SCSS
import './ManageSchedule.scss'

class ManageSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDoctor: null,
            dataAllDoctor: '',
            currentDate: '',
            hourScheduleDoctor: [],
        }
    }

    async componentDidMount() {
        await this.props.getAllDoctorStart();
        await this.props.getHourScheduleDoctorStart();
    }

    componentDidUpdate(prevProps) {
        let { dataAllDoctorRedux, language, hourScheduleDoctorRedux } = this.props;
        if (prevProps.dataAllDoctorRedux !== dataAllDoctorRedux) {
            let dataSelect = this.buildDataInputSelect(this.props.dataAllDoctorRedux);
            this.setState({
                dataAllDoctor: dataSelect,
            })
        }

        if (prevProps.language !== language) {
            let dataSelect = this.buildDataInputSelect(this.props.dataAllDoctorRedux);
            this.setState({
                dataAllDoctor: dataSelect,
            })
        }

        if (prevProps.hourScheduleDoctorRedux !== hourScheduleDoctorRedux) {
            this.setState({
                hourScheduleDoctor: hourScheduleDoctorRedux
            })
        }
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;

        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let dataVi = `${item.firstName} ${item.lastName}`;
                let dataEn = `${item.lastName} ${item.firstName}`;

                object.label = (language === languages.VI) ? dataVi : dataEn;
                object.value = item.id;
                result.push(object);
            })
        }

        return result;
    }

    handleChange = async (selectedDoctor) => {
        this.setState({
            selectedDoctor: selectedDoctor
        });
    }

    handleOnChangeDatePicker = (value) => {
        this.setState({
            currentDate: value[0]
        })
    }

    render() {
        const { selectedDoctor, hourScheduleDoctor } = this.state;
        const { language } = this.props;

        return (
            <div className='manage-schedule-container'>
                <div className='title'><FormattedMessage id="manage_schedule.manage_doctor_examination_plan" /></div>
                <div className='schedule-book-tickets'>
                    <div className='choice'>
                        <div className='choice-doctor'>
                            <label><FormattedMessage id="manage_schedule.choice_doctor" /></label>
                            <Select
                                value={selectedDoctor}
                                onChange={this.handleChange}
                                options={this.state.dataAllDoctor}
                            />
                        </div>
                        <div className='choice-date'>
                            <label><FormattedMessage id="manage_schedule.choice_date" /></label>
                            <DatePicker onChange={this.handleOnChangeDatePicker} minDate={new Date()} value={this.state.currentDate} />
                        </div>
                    </div>
                    <div className='book-ticket-time'>
                        {hourScheduleDoctor.map((value, index) => {
                            return (
                                <div key={index}>{language === languages.VI ? value.valueVi : value.valueEn}</div>
                            )
                        })}
                    </div>
                    <button className='save-book-ticket'><FormattedMessage id="manage_schedule.save_book_ticket" /></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        dataAllDoctorRedux: state.admin.dataAllDoctor,
        hourScheduleDoctorRedux: state.admin.hourScheduleDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctorStart: () => dispatch(actions.getAllDoctorStart()),
        getHourScheduleDoctorStart: () => dispatch(actions.getHourScheduleDoctorStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
