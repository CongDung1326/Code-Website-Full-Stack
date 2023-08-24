// Learning Redux
import actionTypes from './actionTypes';
// Call API
import { getMoreInfoDoctor, putMoreInfoDoctor, postMoreInfoDoctor, handleGetAllCode, addNewUser, getAllUsers, deleteUser, EditUser, handleGetDoctorHome, handleGetAllDoctor, handlePostSaveInfoDoctor, getDetailDoctor, saveDetailDoctor } from '../../services/userServices'

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            })

            let res = await handleGetAllCode('gender');
            if (res && res.data.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data.data))
            }
            else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
        }
    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    genders: genderData
});
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});

// Position
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllCode('position');
            if (res && res.data.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data.data))
            }
            else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    positions: positionData
});
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
});

// Role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllCode('role');
            if (res && res.data.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data.data))
            }
            else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    roles: roleData
});
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
});

// Save user
export const saveUserStart = (userInfo) => {
    return async (dispatch, getState) => {
        try {
            let res = await addNewUser(userInfo);
            if (res && res.data.errCode === 0) {
                dispatch(saveUserSuccess())
            }
            else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed());
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.SAVE_USER_SUCCESS,
});
export const saveUserFailed = () => ({
    type: actionTypes.SAVE_USER_FAILED,
});

// Get user
export const getUserStart = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers(id);
            if (res && res.errCode === 0) {
                dispatch(getUserSuccess(res.users))
            }
            else {
                dispatch(getUserFailed())
            }
        } catch (e) {
            dispatch(getUserFailed());
        }
    }
}
export const getUserSuccess = (users) => ({
    type: actionTypes.GET_USER_SUCCESS,
    users: users
});
export const getUserFailed = () => ({
    type: actionTypes.GET_USER_FAILED,
});

// Delete user
export const deleteUserStart = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUser(id);
            if (res && res.errCode === 0) {
                dispatch(deleteUserSuccess())
            }
            else {
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            dispatch(deleteUserFailed());
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
});

// Update user
export const updateUserStart = (dataUser) => {
    return async (dispatch, getState) => {
        try {
            let res = await EditUser(dataUser);
            if (res && res.errCode === 0) {
                dispatch(updateUserSuccess())
            }
            else {
                dispatch(updateUserFailed())
            }
        } catch (e) {
            dispatch(updateUserFailed());
        }
    }
}
export const updateUserSuccess = () => ({
    type: actionTypes.UPDATE_USER_SUCCESS,
});
export const updateUserFailed = () => ({
    type: actionTypes.UPDATE_USER_FAILED,
});

// Get data doctor home
export const getDoctorHomeStart = (limit) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetDoctorHome(limit);
            if (res && res.errCode === 0) {
                dispatch(getDoctorHomeSuccess(res.data))
            }
            else {
                dispatch(getDoctorHomeFailed())
            }
        } catch (e) {
            dispatch(getDoctorHomeFailed());
        }
    }
}
export const getDoctorHomeSuccess = (dataDoctor) => ({
    type: actionTypes.GET_DOCTOR_HOME_SUCCESS,
    dataDoctor: dataDoctor
});
export const getDoctorHomeFailed = () => ({
    type: actionTypes.GET_DOCTOR_HOME_FAILED,
});

// Get all data doctor
export const getAllDoctorStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllDoctor();
            if (res && res.errCode === 0) {
                dispatch(getAllDoctorSuccess(res.data))
            }
            else {
                dispatch(getAllDoctorFailed())
            }
        } catch (e) {
            dispatch(getAllDoctorFailed());
        }
    }
}
export const getAllDoctorSuccess = (dataAllDoctor) => ({
    type: actionTypes.GET_ALL_DOCTOR_SUCCESS,
    dataAllDoctor: dataAllDoctor
});
export const getAllDoctorFailed = () => ({
    type: actionTypes.GET_ALL_DOCTOR_FAILED,
});

// Post info doctor
export const postSaveInfoDoctorStart = (dataSave) => {
    return async (dispatch, getState) => {
        try {
            let res = await handlePostSaveInfoDoctor(dataSave);
            if (res && res.errCode === 0) {
                dispatch(postSaveInfoDoctorSuccess())
            }
            else {
                dispatch(postSaveInfoDoctorFailed())
            }
        } catch (e) {
            dispatch(postSaveInfoDoctorFailed());
        }
    }
}
export const postSaveInfoDoctorSuccess = () => ({
    type: actionTypes.POST_SAVE_INFO_DOCTOR_SUCCESS
});
export const postSaveInfoDoctorFailed = () => ({
    type: actionTypes.GET_ALL_DOCTOR_FAILED,
});

// Get detail doctor
export const getDetailDoctorStart = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await getDetailDoctor(id);
            if (res && res.errCode === 0) {
                dispatch(getDetailDoctorSuccess(res.data))
            }
            else {
                dispatch(getDetailDoctorFailed())
            }
        } catch (e) {
            dispatch(getDetailDoctorFailed());
        }
    }
}
export const getDetailDoctorSuccess = (detailDoctor) => ({
    type: actionTypes.GET_DETAIL_DOCTOR_SUCCESS,
    detailDoctor: detailDoctor
});
export const getDetailDoctorFailed = () => ({
    type: actionTypes.GET_DETAIL_DOCTOR_FAILED,
});

// Save detail doctor
export const saveDetailDoctorStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctor(data);
            if (res && res.errCode === 0) {
                dispatch(saveDetailDoctorSuccess())
            }
            else {
                dispatch(saveDetailDoctorFailed())
            }
        } catch (e) {
            dispatch(saveDetailDoctorFailed());
        }
    }
}
export const saveDetailDoctorSuccess = () => ({
    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
});
export const saveDetailDoctorFailed = () => ({
    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
});

// Get hour schedule doctor
export const getHourScheduleDoctorStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllCode('time');
            if (res && res.data.errCode === 0) {
                dispatch(getHourScheduleDoctorSuccess(res.data.data))
            }
            else {
                dispatch(getHourScheduleDoctorFailed())
            }
        } catch (e) {
            dispatch(getHourScheduleDoctorFailed());
        }
    }
}
export const getHourScheduleDoctorSuccess = (hourScheduleDoctor) => ({
    type: actionTypes.GET_HOUR_SCHEDULE_DOCTOR_SUCCESS,
    hourScheduleDoctor: hourScheduleDoctor,
});
export const getHourScheduleDoctorFailed = () => ({
    type: actionTypes.GET_HOUR_SCHEDULE_DOCTOR_FAILED,
});

// Get select more info doctor
export const getSelectMoreInfoDoctorStart = () => {
    return async (dispatch, getState) => {
        try {
            let price = await handleGetAllCode('price');
            let payment = await handleGetAllCode('payment');
            let province = await handleGetAllCode('province');

            if (price && price.data.errCode === 0 &&
                payment && payment.data.errCode === 0 &&
                province && province.data.errCode === 0) {
                dispatch(getSelectMoreInfoDoctorSuccess({
                    price: price.data.data,
                    payment: payment.data.data,
                    province: province.data.data,
                }))
            }
            else {
                dispatch(getSelectMoreInfoDoctorFailed())
            }
        } catch (e) {
            dispatch(getSelectMoreInfoDoctorFailed());
        }
    }
}
export const getSelectMoreInfoDoctorSuccess = (data) => ({
    type: actionTypes.GET_SELECT_MORE_INFO_DOCTOR_SUCCESS,
    priceData: data.price,
    paymentData: data.payment,
    provinceData: data.province,
});
export const getSelectMoreInfoDoctorFailed = () => ({
    type: actionTypes.GET_SELECT_MORE_INFO_DOCTOR_FAILED,
});

// Create more info doctor
export const createMoreInfoDoctorStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await postMoreInfoDoctor(data);

            if (res && res.errCode === 0) {
                dispatch(getSelectMoreInfoDoctorSuccess())
            }
            else {
                dispatch(getSelectMoreInfoDoctorFailed())
            }
        } catch (e) {
            dispatch(getSelectMoreInfoDoctorFailed());
        }
    }
}
export const createMoreInfoDoctorSuccess = () => ({
    type: actionTypes.CREATE_MORE_INFO_DOCTOR_SUCCESS,
});
export const createMoreInfoDoctorFailed = () => ({
    type: actionTypes.CREATE_MORE_INFO_DOCTOR_FAILED,
});

// Edit more info doctor
export const putMoreInfoDoctorStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await putMoreInfoDoctor(data);

            console.log('Check res: ', res);
            if (res && res.errCode === 0) {
                dispatch(putMoreInfoDoctorSuccess())
            }
            else {
                dispatch(putMoreInfoDoctorFailed())
            }
        } catch (e) {
            dispatch(putMoreInfoDoctorFailed());
        }
    }
}
export const putMoreInfoDoctorSuccess = () => ({
    type: actionTypes.PUT_MORE_INFO_DOCTOR_SUCCESS,
});
export const putMoreInfoDoctorFailed = () => ({
    type: actionTypes.PUT_MORE_INFO_DOCTOR_FAILED,
});

// Get more info doctor
export const getMoreInfoDoctorStart = (doctorId) => {
    return async (dispatch, getState) => {
        try {
            let res = await getMoreInfoDoctor(doctorId);

            if (res && res.errCode === 0) {
                dispatch(getMoreInfoDoctorSuccess(res.doctorInfo))
            }
            else {
                dispatch(getMoreInfoDoctorFailed())
            }
        } catch (e) {
            dispatch(getMoreInfoDoctorFailed());
        }
    }
}
export const getMoreInfoDoctorSuccess = (doctorInfo) => ({
    type: actionTypes.GET_MORE_INFO_DOCTOR_SUCCESS,
    doctorInfo: doctorInfo,
});
export const getMoreInfoDoctorFailed = () => ({
    type: actionTypes.GET_MORE_INFO_DOCTOR_FAILED,
});