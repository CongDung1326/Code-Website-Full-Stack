import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../../Banner/Header';
import * as actions from '../../../../store/actions';
import { languages } from '../../../../utils';
import DoctorSchedule from './DoctorSchedule';

import './DetailDoctor.scss'

class DetailDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detailDoctor: null,
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            await this.props.getDetailDoctorStart(this.props.match.params.id);
        }
    }

    componentDidUpdate(prevProps) {
        let { detailDoctorRedux } = this.props;
        if (prevProps.detailDoctorRedux !== detailDoctorRedux) {
            this.setState({
                detailDoctor: detailDoctorRedux,
            })
        }
    }

    render() {
        let { language } = this.props;
        let { detailDoctor } = this.state;
        let introduceVi, introduceEn = '';
        let imageBase64 = '';
        if (detailDoctor && detailDoctor.image) {
            imageBase64 = new Buffer(detailDoctor.image, 'base64').toString('binary');
        }

        if (detailDoctor && detailDoctor.positionData) {
            introduceVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
            introduceEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
        }
        return (
            <>
                <Header getBanner={false} />
                <div className='detail-doctor-container'>
                    <div className='intro-doctor'>
                        <div className='left'>
                            <img src={imageBase64} alt='' />
                        </div>
                        <div className='right'>
                            <div className='m-title'>
                                <h3 className='introduce'>{(language === languages.VI) ? introduceVi : introduceEn}</h3>
                                <div className='description'>{detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description && <div>{detailDoctor.Markdown.description}</div>}</div>
                            </div>
                        </div>
                    </div>
                    <div className='schedule-doctor'>
                        <div className='content-left'>
                            <DoctorSchedule doctorId={(detailDoctor && detailDoctor.id ? detailDoctor.id : null)} />
                        </div>
                        <div className='content-right'></div>
                    </div>
                    <div className='detail-info-doctor'>
                        {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML && <div dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}></div>}
                    </div>
                    <div className='comment-doctor'></div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        detailDoctorRedux: state.admin.detailDoctor,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDetailDoctorStart: (id) => dispatch(actions.getDetailDoctorStart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);