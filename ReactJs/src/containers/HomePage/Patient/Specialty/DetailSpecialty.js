import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Header from '../../Banner/Header';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorInfo from '../Doctor/DoctorInfo';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import * as actions from '../../../../store/actions';
import { languages } from '../../../../utils';
// SCSS
import './DetailSpecialty.scss'
import { getAllSpecialty } from '../../../../services/userServices';

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            specialties: null,
            provinces: [],
            isShowMore: false,
            arrDoctorId: [],
        }
    }

    async componentDidMount() {
        if (this.props && this.props.match && this.props.match.params) {
            if (this.props && this.props.match && this.props.match.params) {
                let { id } = this.props.match.params;
                let res = await getAllSpecialty(id, 'ALL');

                this.setState({
                    specialties: res.specialties ? res.specialties : null,
                    arrDoctorId: res.specialties.doctorInfo ? res.specialties.doctorInfo : null,
                })
            }
            await this.props.getAllProvinceStart();
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        let { specialtiesRedux, provincesRedux } = this.props;

        if (prevProps.specialtiesRedux !== specialtiesRedux) {
            this.setState({
                specialties: specialtiesRedux,
                arrDoctorId: specialtiesRedux.doctorInfo ? specialtiesRedux.doctorInfo : null,
            })
        }

        if (prevProps.provincesRedux !== provincesRedux) {
            let result = provincesRedux;
            if (result && result.length > 0) {
                result.unshift({
                    createAt: null,
                    updateAt: null,
                    valueEn: 'Nationwide',
                    valueVi: "Toàn quốc",
                    keyMap: 'ALL',
                    type: "PROVINCE",
                })
            }

            this.setState({
                provinces: result,
            })
        }
    }

    handleOnChangeShowMore = () => {
        let { isShowMore } = this.state;

        this.setState({
            isShowMore: !isShowMore,
        })
    }

    handleOnChangeGetProvince = async (event) => {
        let value = event.target.value;

        if (this.props && this.props.match && this.props.match.params) {
            let { id } = this.props.match.params;
            let res = await getAllSpecialty(id, value);

            this.setState({
                specialties: res.specialties ? res.specialties : null,
                arrDoctorId: res.specialties.doctorInfo ? res.specialties.doctorInfo : null,
            })
        }
    }

    render() {
        let { language } = this.props;
        let { specialties, provinces, isShowMore, arrDoctorId } = this.state;

        //console.log('Check arrDoctorId: ', arrDoctorId);
        return (
            <>
                <Header />
                <div className='detail-specialty-container'>
                    <div className='specialty-info'>
                        <div className='specialty-name'>
                            {specialties && <h3>{specialties.name}</h3>}
                        </div>
                        <div className='specialty-description' style={(isShowMore === true ? { height: "auto" } : { height: "100px" })}>
                            {specialties && <div dangerouslySetInnerHTML={{ __html: specialties.descriptionHTML }}></div>}
                        </div>
                        <div className='read-more' onClick={() => this.handleOnChangeShowMore()}>{isShowMore ? <FormattedMessage id="doctor_info.hidden" /> : <FormattedMessage id="doctor_info.show_more" />}</div>
                    </div>
                    <div className='provinces'>
                        <select className='province-select' onChange={(e) => this.handleOnChangeGetProvince(e)}>
                            {provinces && provinces.length > 0 &&
                                provinces.map((item, index) => {
                                    return (
                                        <option value={item.keyMap} key={index}>{(language === languages.VI) ? item.valueVi : item.valueEn}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='doctor-info'>
                        {arrDoctorId && arrDoctorId.length > 0 &&
                            arrDoctorId.map((item, index) => {
                                return (
                                    <div className='doctor' key={index}>
                                        <div className='left'>
                                            <ProfileDoctor doctorId={item.doctorId} isShowDescript={true} />
                                        </div>
                                        <div className='right'>
                                            <DoctorSchedule doctorId={item.doctorId} />
                                            <DoctorInfo doctorId={item.doctorId} />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        specialtiesRedux: state.admin.specialties,
        provincesRedux: state.admin.provinces,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSpecialtyStart: (id, location) => dispatch(actions.getAllSpecialtyStart(id, location)),
        getAllProvinceStart: () => dispatch(actions.getAllProvinceStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);