import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import * as actions from '../../../../../store/actions';
import { languages } from '../../../../../utils';
import DatePicker from '../../../../../components/Input/DatePicker';
import moment from 'moment';
import { toast } from 'react-toastify';
// Select
import Select from 'react-select';
// SCSS
import './BookingModal.scss'

class BookingModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstAndLastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reasonForExamination: '',
            date: '',
            selectGender: null,
            detailGenders: null,
        }
    }

    async componentDidMount() {
        await this.props.fetchGenderStart();
    }

    componentDidUpdate(prevProps) {
        let { genderRedux } = this.props;
        if (prevProps.genderRedux !== genderRedux) {
            let genders = this.buildDataInputSelect(genderRedux, 'GENDER');

            this.setState({
                detailGenders: genders,
            });
        }
    }

    buildDataInputSelect = (inputData, type) => {
        let result = [];
        let { language } = this.props;

        if (inputData && inputData.length > 0) {
            if (type === 'GENDER') {
                inputData.map((item, index) => {
                    let object = {};

                    object.label = (language === languages.VI) ? item.valueVi : item.valueEn;
                    object.value = item.keyMap;
                    result.push(object);
                })
            }
        }

        return result;
    }

    handleChangeOnInput = (event, id) => {
        let value = event.target.value;
        let coppyState = this.state;
        coppyState[id] = value;

        this.setState({
            ...coppyState
        })
    }

    handleSaveScheduleBooking = () => {
        let { dataScheduleTime, language } = this.props;
        let { firstAndLastName, phoneNumber, email, address, reasonForExamination, selectGender } = this.state;

        if (dataScheduleTime && dataScheduleTime.timeData && dataScheduleTime.doctorData && dataScheduleTime.doctorId && dataScheduleTime.timeType && dataScheduleTime.date) {
            let time = (language === languages.VI) ? dataScheduleTime.timeData.valueVi : dataScheduleTime.timeData.valueEn;
            let date = (language === languages.VI) ?
                moment(+dataScheduleTime.date).format('dddd - DD/MM/YYYY') :
                moment(+dataScheduleTime.date).locale('en').format('ddd - MM/DD/YYYY');
            let nameDoctor = (language === languages.VI) ?
                `${dataScheduleTime.doctorData.firstName} ${dataScheduleTime.doctorData.lastName}` :
                `${dataScheduleTime.doctorData.lastName} ${dataScheduleTime.doctorData.firstName}`

            this.props.postBookingAppointmentStart({
                fullName: firstAndLastName,
                phoneNumber: phoneNumber,
                email: email,
                address: address,
                reasonForExamination: reasonForExamination,
                date: dataScheduleTime.date,
                gender: selectGender.value,
                doctorId: dataScheduleTime.doctorId,
                timeType: dataScheduleTime.timeType,
                timePlace: time,
                datePlace: date,
                nameDoctor: nameDoctor,
                language: language,
            })

            this.setState({
                firstAndLastName: '',
                phoneNumber: '',
                email: '',
                address: '',
                reasonForExamination: '',
                date: '',
                selectGender: '',
            })

            toast.success('Create booking schedule success!');
            this.props.toggle();
        }
    }

    handleChangeGender = (selectGender) => {
        this.setState({
            selectGender: selectGender,
        });
    }

    handleOnChangeDatePicker = (value) => {
        this.setState({
            date: value[0]
        })
    }

    render() {

        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} size='lg' centered={true}>
                <ModalHeader toggle={this.props.toggle}><FormattedMessage id="booking_modal.add_schedule" /></ModalHeader>
                <ModalBody>
                    <div className='doctor-info'><ProfileDoctor isShowDescript={false} dataTime={this.props.dataScheduleTime} doctorId={this.props.doctorId} /></div>
                    <div className='container-schedule-modal'>
                        <div className='first-and-last-name'>
                            <label><FormattedMessage id="booking_modal.first_and_last_name" /></label>
                            <input className='input' type='text' onChange={(e) => this.handleChangeOnInput(e, 'firstAndLastName')} value={this.state.firstAndLastName} />
                        </div>
                        <div className='phone-number'>
                            <label><FormattedMessage id="booking_modal.phone_number" /></label>
                            <input className='input' type='text' onChange={(e) => this.handleChangeOnInput(e, 'phoneNumber')} value={this.state.phoneNumber} />
                        </div>
                        <div className='email'>
                            <label><FormattedMessage id="booking_modal.email" /></label>
                            <input className='input' type='email' onChange={(e) => this.handleChangeOnInput(e, 'email')} value={this.state.email} />
                        </div>
                        <div className='address'>
                            <label><FormattedMessage id="booking_modal.address" /></label>
                            <input className='input' type='text' onChange={(e) => this.handleChangeOnInput(e, 'address')} value={this.state.address} />
                        </div>
                        <div className='reason-for-examination'>
                            <label><FormattedMessage id="booking_modal.reason_for_examination" /></label>
                            <input className='input' type='text' onChange={(e) => this.handleChangeOnInput(e, 'reasonForExamination')} value={this.state.reasonForExamination} />
                        </div>
                        <div className='place-for'>
                            <label><FormattedMessage id="booking_modal.date" /></label>
                            <DatePicker className='input' onChange={this.handleOnChangeDatePicker} value={this.state.date} />
                        </div>
                        <div className='gender'>
                            <label><FormattedMessage id="booking_modal.gender" /></label>
                            <Select
                                value={this.state.selectGender}
                                onChange={this.handleChangeGender}
                                options={this.state.detailGenders}
                                placeholder=''
                                className='select-gender'
                                styles={{
                                    menu: (state) => state.height = '100%',
                                }}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type='button' className='add-user' onClick={() => this.handleSaveScheduleBooking()}>
                        <FormattedMessage id="booking_modal.complete" />
                    </button>{' '}
                    <button type='button' className='close' onClick={this.props.toggle}>
                        <FormattedMessage id="booking_modal.cancel" />
                    </button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postBookingAppointmentStart: (data) => dispatch(actions.postBookingAppointmentStart(data)),
        fetchGenderStart: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);