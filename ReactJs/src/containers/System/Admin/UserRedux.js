import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { toast } from 'react-toastify';

// SCSS
import './UserRedux.scss';

import { handleGetAllCode } from '../../../services/userServices';

// Language
import { languages } from '../../../utils/constant'

// Redux
import * as actions from '../../../store/actions';

import TableManageUser from './TableManageUser';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genders: [],
            positions: [],
            roles: [],
            previewImageUrl: '',
            isOpen: false,
            email: '',
            password: '',
            lastName: '',
            firstName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            image: '',
            isCreateUser: false,
        }
    }

    componentDidMount() {
        // this.getGender();
        // this.getPosition();
        // this.getRole();

        // Sau khi khai báo ở mapDispatchToProps thì ta sử dụng props để gọi nó ra (lưu ý: props này là ở thằng redux không liên quan gì tới thằng cha chuyền props lại cho thằng con của React nhé!)
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps) {
        // Thằng componentDidUpdate là nó sẽ so sánh với previous (quá khứ) với hiện tại (this) nếu như có gì thay đổi thì tự động set state
        // [0] [3]
        // [3] [3]
        let { genderRedux, positionRedux, roleRedux } = this.props

        if (prevProps.genderRedux !== genderRedux || prevProps.positionRedux !== positionRedux || prevProps.roleRedux !== roleRedux) {
            this.setState({
                genders: genderRedux,
                gender: genderRedux && genderRedux.length > 0 ? genderRedux[0].key : '',
                positions: positionRedux,
                position: positionRedux && positionRedux.length > 0 ? positionRedux[0].key : '',
                roles: roleRedux,
                role: roleRedux && roleRedux.length > 0 ? roleRedux[0].key : '',
            })
        }
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

    handleOnChangeImage = (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            // Create url for image
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImageUrl: objectUrl,
                image: file
            })
        }
    }

    openPreviewImage = () => {
        let previewImageUrl = this.state.previewImageUrl;

        if (!previewImageUrl) return;
        this.setState({
            isOpen: true,
        })
    }

    handleOnChangeInput = (e, id) => {
        let coppyState = this.state;
        coppyState[id] = e.target.value;

        this.setState({
            ...coppyState
        });
    }

    checkValueInput = () => {
        let check = ['email', 'password', 'lastName', 'firstName', 'phoneNumber', 'address'];
        let coppyState = this.state;
        let isSuccess = true;
        for (let i = 0; i < check.length; i++) {
            if (!coppyState[check[i]]) {
                toast.error('❌ Please enter enough information: ' + check[i]);
                isSuccess = false;
                break;
            }
        }

        return isSuccess;
    }

    handleSaveUser = async () => {
        if (this.checkValueInput()) {
            let { email, password, lastName, firstName, phoneNumber, address, gender, position, role } = this.state;
            let userInfo = {
                email: email,
                password: password,
                lastName: lastName,
                firstName: firstName,
                phoneNumber: phoneNumber,
                address: address,
                gender: gender,
                positionId: position,
                roleId: role,
            }
            await this.props.saveUserStart(userInfo);
            await this.props.getUserStart('all');

            // Reset input
            this.setState({
                isCreateUser: true
            })
            if (this.state.isCreateUser) {
                this.setState({
                    email: '',
                    password: '',
                    lastName: '',
                    firstName: '',
                    phoneNumber: '',
                    address: ''
                })
            }

            toast.success('✔ Create user success!')
        }
    }

    render() {
        let { genders, positions, roles, isOpen, email, password, lastName, firstName, phoneNumber, address } = this.state;
        let { language, isLoadingGender } = this.props;

        //console.log('Check props from redux: ', this.props)

        return (
            <>
                <div className='user-redux-container'>
                    <div>{isLoadingGender === true ? "Loading gender" : ""}</div>
                    <div className='title'>User redux learning redux Don Vau</div>
                    <div className='user-redux-body'>
                        <div className='add-new-user'>
                            <div className='email'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.email" /></label>
                                <input type='email' value={email} onChange={(e) => this.handleOnChangeInput(e, 'email')} />
                            </div>
                            <div className='password'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.password" /></label>
                                <input type='password' value={password} onChange={(e) => this.handleOnChangeInput(e, 'password')} />
                            </div>
                            <div className='first-name'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.first_name" /></label>
                                <input type='text' value={firstName} onChange={(e) => this.handleOnChangeInput(e, 'firstName')} />
                            </div>
                            <div className='last-name'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.last_name" /></label>
                                <input type='text' value={lastName} onChange={(e) => this.handleOnChangeInput(e, 'lastName')} />
                            </div>
                            <div className='phone-bumber'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.phone_number" /></label>
                                <input type='text' value={phoneNumber} onChange={(e) => this.handleOnChangeInput(e, 'phoneNumber')} />
                            </div>
                            <div className='address'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.address" /></label>
                                <input type='text' value={address} onChange={(e) => this.handleOnChangeInput(e, 'address')} />
                            </div>
                            <div className='gender'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.gender.gender" /></label>
                                <select onChange={(e) => this.handleOnChangeInput(e, 'gender')}>
                                    {genders.map((gender) => {
                                        return (
                                            <option value={gender.key}>{language === languages.VI ? gender.valueVi : gender.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='position' onChange={(e) => this.handleOnChangeInput(e, 'position')}>
                                <label><FormattedMessage id="manage_user.crud_user_redux.position" /></label>
                                <select>
                                    {positions.map((position) => {
                                        return (
                                            <option value={position.key}>{language === languages.VI ? position.valueVi : position.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='roleid' onChange={(e) => this.handleOnChangeInput(e, 'role')}>
                                <label><FormattedMessage id="manage_user.crud_user_redux.role_id" /></label>
                                <select>
                                    {roles.map((role) => {
                                        return (
                                            <option value={role.key}>{language === languages.VI ? role.valueVi : role.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='image'>
                                <label><FormattedMessage id="manage_user.crud_user_redux.image" /></label>
                                <div className='upload-image'>
                                    <input id='previewImg' type='file' onChange={(e) => this.handleOnChangeImage(e)} hidden />
                                    <label htmlFor='previewImg'>Tải ảnh <i className="fa-solid fa-upload"></i></label>
                                    <div className='preview-image' style={{ backgroundImage: `url(${this.state.previewImageUrl})` }} onClick={() => this.openPreviewImage()} ></div>
                                </div>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={this.state.previewImageUrl}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                    />
                                )}
                            </div>
                            <button className='save-user' onClick={() => this.handleSaveUser()}><FormattedMessage id="manage_user.crud_user_redux.save" /></button>
                        </div>
                    </div>
                </div>
                <TableManageUser />
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language, // state.app.language được khai báo từ thằng rootReducer (dùng để lấy các giá trị được lưu trong Redux)
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()), // Nó lấy từ adminActions
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        saveUserStart: (userInfo) => dispatch(actions.saveUserStart(userInfo)),
        getUserStart: (id) => dispatch(actions.getUserStart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
