import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { CommonUtils } from '../../../utils';
import { createNewSpecialty } from '../../../services/userServices';
// SCSS
import './ManageSpecialty.scss';
// Markdown Edit
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt();

class ManageSpecialty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            nameSpecialty: '',
            imageSpecialty: '',
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
                imageSpecialty: base64
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
        let { contentHTML, contentMarkdown, imageSpecialty, nameSpecialty } = this.state;

        if (contentHTML && contentMarkdown && imageSpecialty && nameSpecialty) {
            await createNewSpecialty({
                descriptionHTML: contentHTML,
                descriptionMarkdown: contentMarkdown,
                image: imageSpecialty,
                name: nameSpecialty,
            })

            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                imageSpecialty: '',
                nameSpecialty: '',
            })
            toast.success('Create specialty success!');
        }
        else {
            toast.error('Pls write all!');
        }
    }

    render() {

        return (
            <div className='manage-specialty-container'>
                <div className='title'><FormattedMessage id="manage_specialty.title" /></div>
                <div className='specialty'>
                    <div className='specialty-name'>
                        <label><FormattedMessage id="manage_specialty.specialty_name" /></label>
                        <input type='text' onChange={(e) => this.handleOnChangeValueInput(e, 'nameSpecialty')} value={this.state.nameSpecialty} />
                    </div>
                    <div className='specialty-image'>
                        <label className='m-title'><FormattedMessage id="manage_specialty.specialty_image" /></label>
                        <label className='upload-image' htmlFor='specialty-id'><FormattedMessage id="manage_specialty.upload" /> <i className="fa-solid fa-upload"></i></label>
                        <input id="specialty-id" type='file' onChange={(e) => this.handleOnChangeImage(e)} hidden />
                    </div>
                </div>
                <div className='manage-specialty-edit'><div className='manage-doctor-editor'><MdEditor value={this.state.contentMarkdown} style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} /></div></div>
                <button className='save-manage-specialty' onClick={() => this.handleOnClickSaveSpecialty()}><FormattedMessage id="manage_specialty.save" /></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);