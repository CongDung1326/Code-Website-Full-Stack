import React, { Component } from 'react';
import './ManageDoctor.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

// SCSS
import './ManageDoctor.scss';

// Markdown Edit
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

// Select
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const mdParser = new MarkdownIt();

class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDoctor: null,
            contentMarkdown: '',
            contentHTML: '',
            description: '',
        }
    }


    componentDidMount() {

    }

    handleSaveEditorMarkdown = () => {
        console.log('Check all state after save: ', this.state);
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
                            options={options}
                        />
                    </div>
                    <div className='content-right'>
                        <label>Thông tin giới thiệu</label>
                        <textarea rows={4} onChange={(e) => this.handleOnChangeDescription(e)}>aklsfjllkàlkalksfjkl</textarea>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
