import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
// SCSS
import './Loading.scss'

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.setState({
                isOpen: this.props.isOpen
            })
        }
    }

    render() {
        let { isOpen } = this.state;

        return (
            <div className='loading-container' style={(isOpen === true) ? { display: 'flex' } : { display: 'none' }}>
                <div className="spinner-1">
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading);