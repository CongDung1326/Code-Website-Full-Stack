import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';

// SCSS
import './BookingModal.scss'

class BookingModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps) {

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
                            <input type='text' onChange={(e) => this.handleChangeOnInput(e, 'firstAndLastName')} value={this.state.firstAndLastName} />
                        </div>
                        <div className='phone-number'>
                            <label><FormattedMessage id="booking_modal.phone_number" /></label>
                            <input type='text' onChange={(e) => this.handleChangeOnInput(e, 'phoneNumber')} value={this.state.phoneNumber} />
                        </div>
                        <div className='email'>
                            <label><FormattedMessage id="booking_modal.email" /></label>
                            <input type='email' onChange={(e) => this.handleChangeOnInput(e, 'email')} value={this.state.email} />
                        </div>
                        <div className='address'>
                            <label><FormattedMessage id="booking_modal.address" /></label>
                            <input type='text' onChange={(e) => this.handleChangeOnInput(e, 'address')} value={this.state.address} />
                        </div>
                        <div className='reason-for-examination'>
                            <label><FormattedMessage id="booking_modal.reason_for_examination" /></label>
                            <input type='text' onChange={(e) => this.handleChangeOnInput(e, 'reasonForExamination')} value={this.state.reasonForExamination} />
                        </div>
                        <div className='place-for'>
                            <label><FormattedMessage id="booking_modal.place_for" /></label>
                            <input type='text' onChange={(e) => this.handleChangeOnInput(e, 'placeFor')} value={this.state.placeFor} />
                        </div>
                        <div className='gender'>
                            <label><FormattedMessage id="booking_modal.gender" /></label>
                            <input type='text' onChange={(e) => this.handleChangeOnInput(e, 'gender')} value={this.state.gender} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type='button' className='add-user' onClick={this.props.toggle}>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);