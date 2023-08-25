import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../store/actions';
import { languages } from '../../../../utils';
import { getMoreInfoDoctor } from '../../../../services/userServices';
import { FormattedMessage } from 'react-intl';

import './DoctorInfo.scss'

class DoctorInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClickShowPrice: false,
            doctorInfo: {},
        }
    }

    async componentDidMount() {
    }

    async componentDidUpdate(prevProps) {
        let { doctorId } = this.props;

        if (prevProps.doctorId !== doctorId) {
            let res = await getMoreInfoDoctor(doctorId);

            this.setState({
                doctorInfo: res.doctorInfo
            })
        }
    }

    handleFormatNumber = (number) => {
        return new Intl.NumberFormat("de-DE").format(number);
    }

    handleOnClickShowMore = () => {
        let { isClickShowPrice } = this.state;

        this.setState({
            isClickShowPrice: !isClickShowPrice
        })
    }

    render() {
        let { isClickShowPrice, doctorInfo } = this.state;
        let { language } = this.props;

        return (
            <div className='doctor-info-container'>
                <h4><FormattedMessage id="doctor_info.address_clinic" /></h4>
                <div className='address-clinic-container'>
                    {doctorInfo && <p className='name-clinic'>{doctorInfo.nameClinic}</p>}
                    {doctorInfo && doctorInfo.provinceData && <p className='address-clinic'>{doctorInfo.addressClinic}, {language === languages.VI ? doctorInfo.provinceData.valueVi : doctorInfo.provinceData.valueEn}</p>}
                </div>
                <div className='price-clinic-container'>
                    {doctorInfo && doctorInfo.priceData && <div className='price'><FormattedMessage id="doctor_info.medical_examination_price" />: {!isClickShowPrice ? language === languages.VI ? this.handleFormatNumber(doctorInfo.priceData.valueVi) + 'đ' : this.handleFormatNumber(doctorInfo.priceData.valueEn) + ' USD' : ''} {!isClickShowPrice && <button onClick={() => this.handleOnClickShowMore()}>Xem chi tiết.</button>}</div>}
                    {doctorInfo && doctorInfo.priceData && isClickShowPrice &&
                        <div className='more-price'>
                            <div className='top'>
                                <div className='top-price'>
                                    <p><FormattedMessage id="doctor_info.medical_examination_price" /></p>
                                    <p>{language === languages.VI ? this.handleFormatNumber(doctorInfo.priceData.valueVi) + 'đ' : this.handleFormatNumber(doctorInfo.priceData.valueEn) + ' USD'}</p>
                                </div>
                                <div className='prioritize'>{doctorInfo.note}</div>
                            </div>
                            {doctorInfo && doctorInfo.paymentData && <div className='bottom'><FormattedMessage id="doctor_info.title2" />: {language === languages.VI ? doctorInfo.paymentData.valueVi : doctorInfo.paymentData.valueEn}</div>}
                            <button onClick={() => this.handleOnClickShowMore()}><FormattedMessage id="doctor_info.show_more" /></button>
                        </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfo);