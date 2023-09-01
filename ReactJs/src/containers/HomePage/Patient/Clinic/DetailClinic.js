import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Header from '../../Banner/Header';
import * as actions from '../../../../store/actions'
// SCSS
import './DetailClinic.scss'
import ProfileDoctor from '../Doctor/ProfileDoctor';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorInfo from '../Doctor/DoctorInfo';

class DetailClinic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clinics: null,
            isShowMore: false,
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let { id } = this.props.match.params;

            await this.props.getAllClinicStart(id, 'ALL');
        }
    }

    componentDidUpdate(prevProps) {
        let { clinicsRedux } = this.props;
        if (prevProps.clinicsRedux !== clinicsRedux) {
            this.setState({
                clinics: clinicsRedux,
                arrDoctorId: clinicsRedux.doctorInfo ? clinicsRedux.doctorInfo : null,
            })
        }
    }

    handleOnChangeShowMore = () => {
        let { isShowMore } = this.state;

        this.setState({
            isShowMore: !isShowMore,
        })
    }

    render() {
        let { clinics, isShowMore, arrDoctorId } = this.state;

        return (
            <>
                <Header />
                <div className='detail-clinic-container'>
                    <div className='clinic-info'>
                        <div className='clinic-name'>
                            <div className='image'>
                                {clinics && clinics.image && <div style={{ backgroundImage: `url(${clinics.image})` }}></div>}
                            </div>
                            <div className='name'>
                                {clinics && <h3>{clinics.name}</h3>}
                                {clinics && <p>{clinics.address}</p>}
                            </div>
                        </div>
                        <div className='clinic-description' style={(isShowMore === true ? { height: "auto" } : { height: "100px" })}>
                            {clinics && <div dangerouslySetInnerHTML={{ __html: clinics.descriptionHTML }}></div>}
                        </div>
                        <div className='read-more' onClick={() => this.handleOnChangeShowMore()}>{isShowMore ? <FormattedMessage id="doctor_info.hidden" /> : <FormattedMessage id="doctor_info.show_more" />}</div>
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
        clinicsRedux: state.admin.clinics,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllClinicStart: (id, location) => dispatch(actions.getAllClinicStart(id, location)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);