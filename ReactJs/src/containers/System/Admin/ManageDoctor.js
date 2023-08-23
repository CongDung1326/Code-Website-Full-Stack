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
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            dataAllDoctor: '',
            detailDoctor: null,
            detailPrice: null,
            detailPayment: null,
            detailProvince: null,
            method: '',
        }
    }


    async componentDidMount() {
        await this.props.getAllDoctorStart();
        await this.props.getSelectMoreInfoDoctorStart();
    }

    componentDidUpdate(prevProps) {
        let { dataAllDoctorRedux, language, detailDoctorRedux, allMethodInfoDoctorRedux } = this.props;
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

        if (prevProps.detailDoctorRedux !== detailDoctorRedux) {
            this.setState({
                detailDoctor: detailDoctorRedux
            })
        }

        if (prevProps.allMethodInfoDoctorRedux !== allMethodInfoDoctorRedux) {
            let price = this.buildDataInputSelectMethod(allMethodInfoDoctorRedux.price);
            let payment = this.buildDataInputSelectMethod(allMethodInfoDoctorRedux.payment);
            let province = this.buildDataInputSelectMethod(allMethodInfoDoctorRedux.province);

            this.setState({
                detailPrice: price,
                detailPayment: payment,
                detailProvince: province,
            })
        }
    }

    handleSaveEditorMarkdown = async () => {
        try {
            let { contentMarkdown, contentHTML, description, selectedDoctor, method } = this.state;

            if (contentMarkdown && selectedDoctor) {
                if (method === manageActions.CREATE) {
                    await this.props.postInfoDoctorStart({
                        contentHTML: contentHTML,
                        contentMarkdown: contentMarkdown,
                        description: description,
                        id: selectedDoctor.value,
                    })

                    // Create success
                    this.setState({
                        contentMarkdown: '',
                        contentHTML: '',
                        description: '',
                        selectedDoctor: null,
                        method: 'CREATE',
                    })
                    toast.success('Create info doctor success!');
                }
                else {
                    await this.props.saveDetailDoctorStart({
                        contentHTML: contentHTML,
                        contentMarkdown: contentMarkdown,
                        description: description,
                        id: selectedDoctor.value,
                    })

                    // Create success
                    this.setState({
                        contentMarkdown: '',
                        contentHTML: '',
                        description: '',
                        selectedDoctor: null,
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

        let { detailDoctor } = this.state;
        if (detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentMarkdown) {
            this.setState({
                contentMarkdown: detailDoctor.Markdown.contentMarkdown,
                description: detailDoctor.Markdown.description,
                method: 'EDIT',
            })
        }
        else {
            this.setState({
                contentMarkdown: '',
                description: '',
                contentHTML: '',
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

    buildDataInputSelectMethod = (inputData) => {
        let result = [];
        let { language } = this.props;

        if (inputData && inputData.length > 0) {
            inputData.map(item => {
                let object = {};
                object.label = (language === languages.VI) ? item.valueVi : item.valueEn;
                object.value = inputData.keyMap;

                result.push(object);
            })
        }

        return result;
    }

    handleChangeChoosePrice = (selectPrice) => {
        this.setState({
            selectPrice: selectPrice
        })

        console.log('Check price: ', selectPrice)
    }

    handleChangeChoosePay = (selectPay) => {
        this.setState({
            selectPay: selectPay
        })
    }

    handleChangeChooseProvince = (selectProvince) => {
        this.setState({
            selectProvince: selectProvince
        })
    }

    render() {
        let { language } = this.props;
        const { selectedDoctor, method, selectPay, selectPrice, selectProvince, detailPrice } = this.state;

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
                            onChange={this.handleChangeChoosePrice}
                            options={this.state.detailPrice}
                            placeholder=''
                        />
                    </div>
                    <div className='chooce-pay'>
                        <label><FormattedMessage id="manage_doctor.choose_pay" /></label>
                        <Select
                            value={selectPay}
                            onChange={this.handleChangeChoosePay}
                            options={this.state.detailPayment}
                            placeholder=''
                        />
                    </div>
                    <div className='choose-province'>
                        <label><FormattedMessage id="manage_doctor.choose_province" /></label>
                        <Select
                            value={selectProvince}
                            onChange={this.handleChangeChooseProvince}
                            options={this.state.detailProvince}
                            placeholder=''

                        />
                    </div>
                    <div className='name-clinic'>
                        <label><FormattedMessage id="manage_doctor.name_clinic" /></label>
                        <input type='text' />
                    </div>
                    <div className='address-clinic'>
                        <label><FormattedMessage id="manage_doctor.address_clinic" /></label>
                        <input type='text' />
                    </div>
                    <div className='note'>
                        <label><FormattedMessage id="manage_doctor.note" /></label>
                        <input type='text' />
                    </div>
                </div>
                <div className='manage-doctor-editor'><MdEditor value={this.state.contentMarkdown} style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} /></div>
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
        allMethodInfoDoctorRedux: state.admin.allMethodInfoDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctorStart: () => dispatch(actions.getAllDoctorStart()),
        postInfoDoctorStart: (dataSave) => dispatch(actions.postSaveInfoDoctorStart(dataSave)),
        saveDetailDoctorStart: (dataSave) => dispatch(actions.saveDetailDoctorStart(dataSave)),
        getDetailDoctorStart: (id) => dispatch(actions.getDetailDoctorStart(id)),
        getSelectMoreInfoDoctorStart: () => dispatch(actions.getSelectMoreInfoDoctorStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
