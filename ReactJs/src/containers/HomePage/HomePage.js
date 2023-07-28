import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Banner/Header';
import Specialty from './Section/Specialty';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <Specialty />
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
