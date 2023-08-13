// Learning Redux
import actionTypes from './actionTypes';
// Call API
import { handleGetAllCode, addNewUser, getAllUsers, deleteUser, EditUser } from '../../services/userServices'

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
            console.log('check create user: ', res)
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