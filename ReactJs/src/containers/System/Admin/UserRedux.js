import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

// SCSS
import './UserRedux.scss';

import { handleGetAllCode } from '../../../services/userServices';

// Language
import { languages } from '../../../utils/constant'

// Redux
import * as actions from '../../../store/actions';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genders: [],
            positions: [],
            roles: []
        }
    }

    componentDidMount() {
        // this.getGender();
        // this.getPosition();
        // this.getRole();

        // Sau khi khai báo ở mapDispatchToProps thì ta sử dụng props để gọi nó ra (lưu ý: props này là ở thằng redux không liên quan gì tới thằng cha chuyền props lại cho thằng con của React nhé!)
        this.props.getGenderStart();
    }

    getGender = async () => {
        try {
            let res = await handleGetAllCode('gender');
            if (res && res.data.errCode === 0) {
                this.setState({
                    genders: res.data.data
                })
            }

            //console.log(this.state.gender)
        } catch (e) {
            console.log(e);
        }
    }

    getPosition = async () => {
        try {
            let res = await handleGetAllCode('position');
            if (res && res.data.errCode === 0) {
                this.setState({
                    positions: res.data.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    getRole = async () => {
        try {
            let res = await handleGetAllCode('role');
            if (res && res.data.errCode === 0) {
                this.setState({
                    roles: res.data.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        //let { genders, positions, roles } = this.state;
        let { language, genderRedux } = this.props;

        //console.log('Check genderRedux from react: ', genderRedux)

        return (
            <div className='user-redux-container'>
                <div className='title'>User redux learning redux Don Vau</div>
                <div className='user-redux-body'>
                    <div className='add-new-user'>
                        <div className='email'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.email" /></label>
                            <input type='email' />
                        </div>
                        <div className='password'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.password" /></label>
                            <input type='password' />
                        </div>
                        <div className='first-name'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.first_name" /></label>
                            <input type='text' />
                        </div>
                        <div className='last-name'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.last_name" /></label>
                            <input type='text' />
                        </div>
                        <div className='phone-bumber'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.phone_number" /></label>
                            <input type='number' />
                        </div>
                        <div className='address'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.address" /></label>
                            <input type='text' />
                        </div>
                        <div className='gender'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.gender.gender" /></label>
                            <select>
                                {genderRedux.map((gender) => {
                                    return (
                                        <option value={language === languages.VI ? gender.valueVi : gender.valueEn}>{language === languages.VI ? gender.valueVi : gender.valueEn}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='position'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.position" /></label>
                            <select>
                                {/* {positions.map((position) => {
                                    return (
                                        <option value={language === languages.VI ? position.valueVi : position.valueEn}>{language === languages.VI ? position.valueVi : position.valueEn}</option>
                                    )
                                })} */}
                            </select>
                        </div>
                        <div className='roleid'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.role_id" /></label>
                            <select>
                                {/* {roles.map((role) => {
                                    return (
                                        <option value={language === languages.VI ? role.valueVi : role.valueEn}>{language === languages.VI ? role.valueVi : role.valueEn}</option>
                                    )
                                })} */}
                            </select>
                        </div>
                        <div className='image'>
                            <label><FormattedMessage id="manage_user.crud_user_redux.image" /></label>
                            <input type='email' />
                        </div>
                        <button className='save-user'><FormattedMessage id="manage_user.crud_user_redux.save" /></button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language, // state.app.language được khai báo từ thằng rootReducer (dùng để lấy các giá trị được lưu trong Redux)
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()) // Nó lấy từ adminActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
