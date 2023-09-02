import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../store/actions';
import { CommonUtils, languages } from '../../utils';
import { toast } from 'react-toastify';
// SCSS
import './RemedyModal.scss'

class RemedyModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            imgBase64: '',
        }
    }

    async componentDidMount() {
        let { dataPatient } = this.props;
        if (dataPatient) {
            this.setState({
                email: (dataPatient && dataPatient.patientData ? dataPatient.patientData.email : '')
            })
        }
    }

    componentDidUpdate(prevProps) {
        let { dataPatient } = this.props;
        if (prevProps.dataPatient !== dataPatient) {
            this.setState({
                email: (dataPatient && dataPatient.patientData ? dataPatient.patientData.email : '')
            })
        }
    }

    handleOnChangeGetImageBase64 = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imgBase64: base64
            });
        }
    }

    handleOnClickSendMedicine = async () => {
        this.props.sendRemedy(this.state);
    }

    render() {
        let { dataPatient } = this.props;

        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} size='mg' centered={true}>
                <ModalHeader toggle={this.props.toggle}>Gửi hoá đơn</ModalHeader>
                <ModalBody>
                    <div className='email-patient'>
                        <lable>Email bệnh nhân</lable>
                        <input type='text' value={this.state.email} />
                    </div>
                    <div className='image-medicine'>
                        <label htmlFor='choose_image_medicine'>Chọn ảnh đơn thuốc</label>
                        <input type='file' id="choose_image_medicine" onChange={(e) => this.handleOnChangeGetImageBase64(e)} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type='button' className='add-user' onClick={() => this.handleOnClickSendMedicine()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);