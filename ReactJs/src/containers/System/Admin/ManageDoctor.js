import React, { Component } from 'react';
import './ManageDoctor.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import { languages, manageActions } from '../../../utils/constant'
import { toast } from 'react-toastify';

// SCSS
import './ManageDoctor.scss';

// Markdown Edit
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

// Select
import Select from 'react-select';

const mdParser = new MarkdownIt();

class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDoctor: null,
            selectPrice: null,
            selectPay: null,
            selectProvince: null,
            selectSpecialty: null,
            selectClinic: null,
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            dataAllDoctor: '',
            detailDoctor: null,
            detailPrice: null,
            detailPayment: null,
            detailProvince: null,
            detailSpecialty: null,
            detailClinic: null,
            method: '',
            nameClinic: '',
            addressClinic: '',
            note: '',
            doctorInfo: null,
        }
    }


    async componentDidMount() {
        await this.props.getAllDoctorStart();
        await this.props.getSelectMoreInfoDoctorStart();
        await this.props.getAllSpecialtyStart('ALL', 'ALL');
        await this.props.getAllClinicStart('ALL', 'ALL');
    }

    async componentDidUpdate(prevProps) {
        let { clinicsRedux, dataAllDoctorRedux, language, detailDoctorRedux, priceRedux, paymentRedux, provinceRedux, doctorInfoRedux, specialtiesRedux } = this.props;

        if (prevProps.dataAllDoctorRedux !== dataAllDoctorRedux) {
            let dataSelect = this.buildDataInputSelect(this.props.dataAllDoctorRedux, 'USERS');
            this.setState({
                dataAllDoctor: dataSelect,
            })
        }

        if (prevProps.specialtiesRedux !== specialtiesRedux) {
            let specialtiesSelect = this.buildDataInputSelect(this.props.specialtiesRedux, 'SPECIALTIES');
            this.setState({
                detailSpecialty: specialtiesSelect,
            })
        }

        if (prevProps.language !== language) {
            let dataSelect = this.buildDataInputSelect(this.props.dataAllDoctorRedux, 'USERS');
            let price = this.buildDataInputSelect(priceRedux, 'PRICE');
            let payment = this.buildDataInputSelect(paymentRedux, 'PAYMENT');
            let province = this.buildDataInputSelect(provinceRedux, 'PROVINCE');

            this.setState({
                dataAllDoctor: dataSelect,
                detailPrice: price,
                detailPayment: payment,
                detailProvince: province,
            });
        }

        if (prevProps.detailDoctorRedux !== detailDoctorRedux) {
            this.setState({
                detailDoctor: detailDoctorRedux
            })
        }

        if (prevProps.priceRedux !== priceRedux && prevProps.paymentRedux !== paymentRedux && prevProps.provinceRedux !== provinceRedux) {
            let price = this.buildDataInputSelect(priceRedux, 'PRICE');
            let payment = this.buildDataInputSelect(paymentRedux, 'PAYMENT');
            let province = this.buildDataInputSelect(provinceRedux, 'PROVINCE');

            this.setState({
                detailPrice: price,
                detailPayment: payment,
                detailProvince: province,
            })
        }

        if (prevProps.doctorInfoRedux !== doctorInfoRedux) {
            this.setState({
                doctorInfo: doctorInfoRedux
            })
        }

        if (prevProps.clinicsRedux !== clinicsRedux) {
            let clinic = this.buildDataInputSelect(clinicsRedux, 'CLINIC');

            this.setState({
                detailClinic: clinic,
            })
        }
    }

    handleSaveEditorMarkdown = async () => {
        try {
            let { selectClinic, contentMarkdown, contentHTML, description, selectedDoctor, selectSpecialty, method, selectPay, selectPrice, selectProvince, addressClinic, nameClinic, note } = this.state;

            if (contentMarkdown && selectSpecialty && selectedDoctor && selectPay && selectPrice && selectProvince && nameClinic && addressClinic && note && selectClinic) {
                if (method === manageActions.CREATE) {
                    await this.props.postInfoDoctorStart({
                        contentHTML: contentHTML,
                        contentMarkdown: contentMarkdown,
                        description: description,
                        id: selectedDoctor.value,
                    })
                    // Create detail doctor
                    await this.props.createMoreInfoDoctorStart({
                        doctorId: selectedDoctor.value,
                        specialtyId: selectSpecialty.value,
                        clinicId: selectClinic.value,
                        priceId: selectPrice.value,
                        provinceId: selectProvince.value,
                        paymentId: selectPay.value,
                        addressClinic: addressClinic,
                        nameClinic: nameClinic,
                        note: note,
                    })

                    // Create success
                    this.setState({
                        contentMarkdown: '',
                        contentHTML: '',
                        description: '',
                        selectedDoctor: null,
                        selectPrice: null,
                        selectPay: null,
                        selectProvince: null,
                        selectSpecialty: null,
                        selectClinic: null,
                        addressClinic: '',
                        nameClinic: '',
                        note: '',
                        method: 'CREATE',
                    });
                    toast.success('Create info doctor success!');
                }
                else {
                    await this.props.saveDetailDoctorStart({
                        contentHTML: contentHTML,
                        contentMarkdown: contentMarkdown,
                        description: description,
                        id: selectedDoctor.value,
                    })
                    await this.props.putMoreInfoDoctorStart({
                        doctorId: selectedDoctor.value,
                        specialtyId: selectSpecialty.value,
                        clinicId: selectClinic.value,
                        priceId: selectPrice.value,
                        provinceId: selectProvince.value,
                        paymentId: selectPay.value,
                        addressClinic: addressClinic,
                        nameClinic: nameClinic,
                        note: note,
                    })

                    // Edit success
                    this.setState({
                        contentMarkdown: '',
                        contentHTML: '',
                        description: '',
                        selectedDoctor: null,
                        selectPrice: null,
                        selectPay: null,
                        selectProvince: null,
                        selectSpecialty: null,
                        selectClinic: null,
                        addressClinic: '',
                        nameClinic: '',
                        note: '',
                        method: 'CREATE',
                    })
                    toast.success('Save info doctor success!');
                }
            }
            else {
                toast.error('Pls choice and writing all!');
            }

        } catch (e) {
            console.log(e);
        }
    }

    handleChangeSelectDoctor = async (selectedDoctor) => {
        this.setState({
            selectedDoctor: selectedDoctor
        });

        await this.props.getDetailDoctorStart(selectedDoctor.value);
        await this.props.getMoreInfoDoctorStart(selectedDoctor.value);

        let { detailDoctor, doctorInfo, selectPay, selectPrice, selectProvince, detailPayment, detailPrice, detailProvince } = this.state;

        if (detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentMarkdown &&
            doctorInfo && doctorInfo.addressClinic && doctorInfo.nameClinic && doctorInfo.paymentId && doctorInfo.priceId && doctorInfo.provinceId) {

            selectPrice = detailPrice.find(item => item && item.value === doctorInfo.priceId)
            selectPay = detailPayment.find(item => item && item.value === doctorInfo.paymentId)
            selectProvince = detailProvince.find(item => item && item.value === doctorInfo.provinceId)

            this.setState({
                contentMarkdown: detailDoctor.Markdown.contentMarkdown,
                description: detailDoctor.Markdown.description,
                nameClinic: doctorInfo.nameClinic,
                note: doctorInfo.note,
                addressClinic: doctorInfo.addressClinic,
                selectPrice: selectPrice,
                selectPay: selectPay,
                selectProvince: selectProvince,
                method: 'EDIT',
            })
        }
        else {
            this.setState({
                contentMarkdown: '',
                description: '',
                contentHTML: '',
                selectPrice: null,
                selectPay: null,
                selectProvince: null,
                addressClinic: '',
                nameClinic: '',
                note: '',
                method: 'CREATE',
            })
        }
    };

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTML: html,
            contentMarkdown: text,
        })
    }

    handleOnChangeDescription = (e) => {
        let value = e.target.value;
        this.setState({
            description: value,
        })
    }

    buildDataInputSelect = (inputData, type) => {
        let result = [];
        let { language } = this.props;

        if (inputData && inputData.length > 0) {
            if (type === 'USERS') {
                inputData.map((item, index) => {
                    let object = {};
                    let dataVi = `${item.firstName} ${item.lastName}`;
                    let dataEn = `${item.lastName} ${item.firstName}`;

                    object.label = (language === languages.VI) ? dataVi : dataEn;
                    object.value = item.id;
                    result.push(object);
                })
            }
            if (type === 'PRICE' || type === 'PAYMENT' || type === 'PROVINCE') {
                inputData.map((item, index) => {
                    let object = {};

                    object.label = (language === languages.VI) ? item.valueVi : item.valueEn;
                    object.value = item.keyMap;
                    result.push(object);
                })
            }
            if (type === 'SPECIALTIES' || type === 'CLINIC') {
                inputData.map((item, index) => {
                    let object = {};

                    object.label = item.name;
                    object.value = item.id;
                    result.push(object);
                })
            }
        }

        return result;
    }

    handleChangeChooseOption = (selectOption, { name }) => {
        let coppyState = this.state;
        coppyState[name] = selectOption;

        this.setState({
            ...coppyState
        });
    }

    handleOnChangeGetDataInput = (e, name) => {
        let coppyState = this.state;
        coppyState[name] = e.target.value;

        this.setState({
            ...coppyState
        })
    }

    render() {
        let { language } = this.props;
        const { selectClinic, selectSpecialty, selectedDoctor, method, selectPay, selectPrice, selectProvince, nameClinic, addressClinic, note } = this.state;

        return (
            <div className='manage-doctor-container'>
                <div className='title'>Hello manage doctor</div>
                <div className='more-info'>
                    <div className='content-left'>
                        <label>Chọn bác sĩ</label>
                        <Select
                            value={selectedDoctor}
                            onChange={this.handleChangeSelectDoctor}
                            options={this.state.dataAllDoctor}
                            placeholder=''
                        />
                    </div>
                    <div className='content-right'>
                        <label>Thông tin giới thiệu</label>
                        <textarea value={this.state.description} rows={2} onChange={(e) => this.handleOnChangeDescription(e)}></textarea>
                    </div>
                </div>
                <div className='info-doctor'>
                    <div className='choose-price'>
                        <label><FormattedMessage id="manage_doctor.choose_price" /></label>
                        <Select
                            value={selectPrice}
                            onChange={this.handleChangeChooseOption}
                            name='selectPrice'
                            options={this.state.detailPrice}
                            placeholder=''
                        />
                    </div>
                    <div className='chooce-pay'>
                        <label><FormattedMessage id="manage_doctor.choose_pay" /></label>
                        <Select
                            value={selectPay}
                            onChange={this.handleChangeChooseOption}
                            options={this.state.detailPayment}
                            placeholder=''
                            name='selectPay'
                        />
                    </div>
                    <div className='choose-province'>
                        <label><FormattedMessage id="manage_doctor.choose_province" /></label>
                        <Select
                            value={selectProvince}
                            onChange={this.handleChangeChooseOption}
                            options={this.state.detailProvince}
                            placeholder=''
                            name='selectProvince'
                        />
                    </div>
                    <div className='name-clinic'>
                        <label><FormattedMessage id="manage_doctor.name_clinic" /></label>
                        <input type='text' value={nameClinic} onChange={(e) => this.handleOnChangeGetDataInput(e, 'nameClinic')} />
                    </div>
                    <div className='address-clinic'>
                        <label><FormattedMessage id="manage_doctor.address_clinic" /></label>
                        <input type='text' value={addressClinic} onChange={(e) => this.handleOnChangeGetDataInput(e, 'addressClinic')} />
                    </div>
                    <div className='note'>
                        <label><FormattedMessage id="manage_doctor.note" /></label>
                        <input type='text' value={note} onChange={(e) => this.handleOnChangeGetDataInput(e, 'note')} />
                    </div>
                </div>
                <div className='specialty-info'>
                    <div className='choose-specialty'>
                        <label><FormattedMessage id="manage_doctor.choose_specialty" /></label>
                        <Select
                            value={selectSpecialty}
                            onChange={this.handleChangeChooseOption}
                            options={this.state.detailSpecialty}
                            placeholder=''
                            name='selectSpecialty'
                        />
                    </div>
                    <div className='choose-clinic'>
                        <label><FormattedMessage id="manage_doctor.choose_clinic" /></label>
                        <Select
                            value={selectClinic}
                            onChange={this.handleChangeChooseOption}
                            options={this.state.detailClinic}
                            placeholder=''
                            name='selectClinic'
                        />
                    </div>
                </div>
                <div className='manage-doctor-editor'><MdEditor value={this.state.contentMarkdown} style={{ height: '450px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} /></div>
                <button className={method === manageActions.EDIT ? 'save-edit-doctor' : 'save-content-doctor'} onClick={() => this.handleSaveEditorMarkdown()}>{method === manageActions.EDIT ? 'Save edit' : 'Save'}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataAllDoctorRedux: state.admin.dataAllDoctor,
        language: state.app.language,
        detailDoctorRedux: state.admin.detailDoctor,
        priceRedux: state.admin.priceData,
        paymentRedux: state.admin.paymentData,
        provinceRedux: state.admin.provinceData,
        doctorInfoRedux: state.admin.doctorInfo,
        specialtiesRedux: state.admin.specialties,
        clinicsRedux: state.admin.clinics,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctorStart: () => dispatch(actions.getAllDoctorStart()),
        postInfoDoctorStart: (dataSave) => dispatch(actions.postSaveInfoDoctorStart(dataSave)),
        saveDetailDoctorStart: (dataSave) => dispatch(actions.saveDetailDoctorStart(dataSave)),
        getDetailDoctorStart: (id) => dispatch(actions.getDetailDoctorStart(id)),
        getSelectMoreInfoDoctorStart: () => dispatch(actions.getSelectMoreInfoDoctorStart()),
        createMoreInfoDoctorStart: (data) => dispatch(actions.createMoreInfoDoctorStart(data)),
        putMoreInfoDoctorStart: (data) => dispatch(actions.putMoreInfoDoctorStart(data)),
        getMoreInfoDoctorStart: (doctorId) => dispatch(actions.getMoreInfoDoctorStart(doctorId)),
        getAllSpecialtyStart: (id, location) => dispatch(actions.getAllSpecialtyStart(id, location)),
        getAllClinicStart: (id, location) => dispatch(actions.getAllClinicStart(id, location)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
