import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { CommonUtils } from '../../../utils';
import { createNewClinic } from '../../../services/userServices';
// SCSS
import './ManageClinic.scss';
// Markdown Edit
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt();

class ManageClinic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            nameClinic: '',
            imageClinic: '',
            addressClinic: '',
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTML: html,
            contentMarkdown: text,
        })
    }

    handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imageClinic: base64
            });
        }
    }

    handleOnChangeValueInput = (event, id) => {
        let coppyState = this.state;
        coppyState[id] = event.target.value;

        this.setState({
            ...coppyState
        })
    }

    handleOnClickSaveSpecialty = async () => {
        let { contentHTML, contentMarkdown, imageClinic, nameClinic, addressClinic } = this.state;

        if (contentHTML && contentMarkdown && imageClinic && nameClinic && addressClinic) {
            await createNewClinic({
                descriptionHTML: contentHTML,
                descriptionMarkdown: contentMarkdown,
                image: imageClinic,
                name: nameClinic,
                address: addressClinic,
            })

            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                imageClinic: '',
                nameClinic: '',
                addressClinic: '',
            })
            toast.success('Create clinic success!');
        }
        else {
            toast.error('Pls write all!');
        }
    }

    render() {

        return (
            <div className='manage-clinic-container'>
                <div className='title'><FormattedMessage id="manage_clinic.title" /></div>
                <div className='clinic'>
                    <div className='clinic-name'>
                        <label><FormattedMessage id="manage_clinic.clinic_name" /></label>
                        <input type='text' onChange={(e) => this.handleOnChangeValueInput(e, 'nameClinic')} value={this.state.nameClinic} />
                        <label><FormattedMessage id="manage_clinic.clinic_address" /></label>
                        <input type='text' onChange={(e) => this.handleOnChangeValueInput(e, 'addressClinic')} value={this.state.addressClinic} />
                    </div>
                    <div className='clinic-image'>
                        <label className='m-title'><FormattedMessage id="manage_clinic.clinic_image" /></label>
                        <label className='upload-image' htmlFor='clinic-id'><FormattedMessage id="manage_clinic.upload" /> <i className="fa-solid fa-upload"></i></label>
                        <input id="clinic-id" type='file' onChange={(e) => this.handleOnChangeImage(e)} hidden />
                    </div>
                </div>
                <div className='manage-clinic-edit'><div className='manage-doctor-editor'><MdEditor value={this.state.contentMarkdown} style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} /></div></div>
                <button className='save-manage-clinic' onClick={() => this.handleOnClickSaveSpecialty()}><FormattedMessage id="manage_clinic.save" /></button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);