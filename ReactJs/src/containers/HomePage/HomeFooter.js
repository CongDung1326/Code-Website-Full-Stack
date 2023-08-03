import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './HomeFooter.scss'

class HomeFooter extends Component {

    render() {
        return (
            <>
                <div className='home-footer'>
                    <p className='author'>&copy; 2023 Don Vau. More infomation, plese visit my facebook. <a className='link' href='https://www.facebook.com/CdungDepTry' target='_blank'>&rarr; Click here &larr;</a></p>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn, // Các biến từ redux
        language: state.app.language, // state.app.language là ta lấy từ file appReducer.js
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
