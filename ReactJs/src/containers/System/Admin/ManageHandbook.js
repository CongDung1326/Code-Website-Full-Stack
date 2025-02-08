import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { CommonUtils } from '../../../utils';
import { createHandbook } from '../../../services/userServices';
// SCSS
import './ManageClinic.scss';
// Markdown Edit
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt();

class ManageHandbook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameHandbook: '',
            imageHandbook: '',
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imageHandbook: base64
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
        let { imageHandbook, nameHandbook } = this.state;

        if (imageHandbook && nameHandbook) {
            await createHandbook({
                image: imageHandbook,
                name: nameHandbook,
            })

            this.setState({
                imageHandbook: '',
                nameHandbook: '',
            })
            toast.success('Create handbook success!');
        }
        else {
            toast.error('Pls write all!');
        }
    }

    render() {

        return (
            <div className='manage-clinic-container'>
                <div className='title'><FormattedMessage id="manage_handbook.title" /></div>
                <div className='clinic'>
                    <div className='clinic-name'>
                        <label><FormattedMessage id="manage_handbook.handbook_name" /></label>
                        <input type='text' onChange={(e) => this.handleOnChangeValueInput(e, 'nameHandbook')} value={this.state.nameHandbook} />
                    </div>
                    <div className='clinic-image'>
                        <label className='m-title'><FormattedMessage id="manage_handbook.handbook_image" /></label>
                        <label className='upload-image' htmlFor='clinic-id'><FormattedMessage id="manage_handbook.upload" /> <i className="fa-solid fa-upload"></i></label>
                        <input id="clinic-id" type='file' onChange={(e) => this.handleOnChangeImage(e)} hidden />
                    </div>
                </div>
                <button className='save-manage-clinic' onClick={() => this.handleOnClickSaveSpecialty()}><FormattedMessage id="manage_handbook.save" /></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageHandbook);