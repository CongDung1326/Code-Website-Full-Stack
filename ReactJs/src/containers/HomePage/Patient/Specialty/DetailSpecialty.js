import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Header from '../../Banner/Header';
// SCSS
import './DetailSpecialty.scss'

class DetailSpecialty extends Component {
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
        console.log('Check props: ', this.props);

        return (
            <>
                <Header />
                <div className='detail-specialty-container'>Hello i'm from specialty</div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);