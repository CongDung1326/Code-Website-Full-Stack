import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Header from '../Banner/Header';
import { postVerifyBookAppointment } from '../../../services/userServices';
// SCSS
import './VerifyEmail.scss'

class VerifyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreate: false,
        }
    }

    async componentDidMount() {
        if (this.props.location) {
            const query = new URLSearchParams(this.props.location.search);
            const token = query.get('token');
            const doctorId = query.get('doctorId');

            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId,
            })
            if (res && res.errCode === 0) {
                this.setState({
                    isCreate: true
                })
            }
        }
    }

    componentDidUpdate(prevProps) {

    }

    render() {
        let { isCreate } = this.state;

        return (
            <>
                <Header getBanner={false} />
                <div className='m-title'><h2>{isCreate === true ? <FormattedMessage id="verify_email.isSuccess" /> : <FormattedMessage id="verify_email.isFailed" />}</h2></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);