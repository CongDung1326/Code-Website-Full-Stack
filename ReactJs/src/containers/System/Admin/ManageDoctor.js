import React, { Component } from 'react';
import './ManageDoctor.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import { languages } from '../../../utils/constant'
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
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            dataAllDoctor: '',
        }
    }


    async componentDidMount() {
        await this.props.getAllDoctorStart();
    }

    componentDidUpdate(prevProps) {
        let { dataAllDoctorRedux, language } = this.props;
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
    }

    handleSaveEditorMarkdown = async () => {
        try {
            let { contentMarkdown, contentHTML, description, selectedDoctor } = this.state;

            if (contentHTML && contentMarkdown && selectedDoctor) {
                await this.props.postInfoDoctorStart({
                    contentHTML: contentHTML,
                    contentMarkdown: contentMarkdown,
                    description: description,
                    id: selectedDoctor.value,
                })

                // Save success
                this.setState({
                    contentMarkdown: '',
                    contentHTML: '',
                    description: '',
                    selectedDoctor: null,
                })
                toast.success('Save info doctor success!');
            }
            else {
                toast.error('Pls choice and writing all!');
            }

        } catch (e) {
            console.log(e);
        }
    }

    handleChange = (selectedDoctor) => {
        this.setState({
            selectedDoctor: selectedDoctor
        });
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

    render() {
        const { selectedDoctor } = this.state;
        return (
            <div className='manage-doctor-container'>
                <div className='title'>Hello manage doctor</div>
                <div className='more-info'>
                    <div className='content-left'>
                        <label>Chọn bác sĩ</label>
                        <Select
                            value={selectedDoctor}
                            onChange={this.handleChange}
                            options={this.state.dataAllDoctor}
                        />
                    </div>
                    <div className='content-right'>
                        <label>Thông tin giới thiệu</label>
                        <textarea value={this.state.description} rows={4} onChange={(e) => this.handleOnChangeDescription(e)}></textarea>
                    </div>
                </div>
                <div className='manage-doctor-editor'><MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} /></div>
                <button className='save-content-doctor' onClick={() => this.handleSaveEditorMarkdown()}>Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataAllDoctorRedux: state.admin.dataAllDoctor,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctorStart: () => dispatch(actions.getAllDoctorStart()),
        postInfoDoctorStart: (dataSave) => dispatch(actions.postSaveInfoDoctorStart(dataSave))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
