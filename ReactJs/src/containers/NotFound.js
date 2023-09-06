import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
// SCSS
import './NotFound.scss';

class NotFound extends Component {
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
            <div className='not-found'>404 Not found</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);