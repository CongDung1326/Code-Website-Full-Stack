import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../store/actions';
import { languages } from '../../../../utils';
import localization from 'moment/locale/vi';
import { getScheduleByDate } from '../../../../services/userServices';

import './DoctorSchedule.scss'
import moment from 'moment';

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allDays: [],
        }
    }

    async componentDidMount() {
        let { language } = this.props;

        let arrDate = []
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === languages.VI) {
                object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            } else {
                object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            arrDate.push(object);
        }
        this.setState({
            allDays: arrDate,
        });
    }

    componentDidUpdate(prevProps) {
        let { language } = this.props;
        if (prevProps.language !== language) {
            let arrDate = []
            for (let i = 0; i < 7; i++) {
                let object = {};
                if (language === languages.VI) {
                    object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
                } else {
                    object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
                }
                object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

                arrDate.push(object);
            }
            this.setState({
                allDays: arrDate,
            })
        }
    }

    handleChangeDate = async (e) => {
        if (this.props.doctorId) {
            let doctorId = this.props.doctorId;
            let date = e.target.value;
            let res = await getScheduleByDate(doctorId, date)

            console.log('Check res: ', res)
        }

    }

    render() {
        let { allDays } = this.state;

        return (
            <div className='doctor-schedule-container'>
                <div className='day-schedule'>
                    <select onChange={(e) => this.handleChangeDate(e)}>
                        {allDays && allDays.length > 0 && allDays.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>{item.label}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        detailDoctorRedux: state.admin.detailDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);