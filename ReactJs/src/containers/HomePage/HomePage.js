import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Banner/Header';

class HomePage extends Component {

    render() {
        console.log('Check props : ', this.props)

        return (
            <div>
                <Header />
            </div>
        );
    }

}

// Thằng này để có thể sử dụng Redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
        // inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
