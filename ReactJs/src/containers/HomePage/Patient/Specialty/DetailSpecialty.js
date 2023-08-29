import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Header from '../../Banner/Header';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorInfo from '../Doctor/DoctorInfo';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import * as actions from '../../../../store/actions';
// SCSS
import './DetailSpecialty.scss'
import { languages } from '../../../../utils';

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            specialties: null,
            provinces: [],
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params;

        if (id) {
            await this.props.getAllSpecialtyStart(id, 'ALL');
        }
        await this.props.getAllProvinceStart();
    }

    componentDidUpdate(prevProps) {
        let { specialtiesRedux, provincesRedux } = this.props;
        if (prevProps.specialtiesRedux !== specialtiesRedux) {
            this.setState({
                specialties: specialtiesRedux,
            })
        }

        if (prevProps.provincesRedux !== provincesRedux) {
            this.setState({
                provinces: provincesRedux,
            })
        }
    }

    render() {
        let { language } = this.props;
        let { specialties, provinces } = this.state;
        let arrDoctorId = (specialties && specialties.doctorInfo) ? specialties.doctorInfo : null;

        return (
            <>
                <Header />
                <div className='detail-specialty-container'>
                    <div className='specialty-info'>
                        <div className='specialty-name'>
                            {specialties && <h3>{specialties.name}</h3>}
                        </div>
                        <div className='specialty-description'>
                            {specialties && <div dangerouslySetInnerHTML={{ __html: specialties.descriptionHTML }}></div>}
                        </div>
                    </div>
                    <div className='provinces'>
                        <select className='province-select'>
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
                                            <ProfileDoctor doctorId={item.DoctorInfo.id} isShowDescript={false} />
                                        </div>
                                        <div className='right'>
                                            <DoctorSchedule doctorId={item.DoctorInfo.id} />
                                            <DoctorInfo doctorId={item.DoctorInfo.id} />
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