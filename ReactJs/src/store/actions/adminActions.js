// Learning Redux
import actionTypes from './actionTypes';
// Call API
import { handleGetAllCode } from '../../services/userServices'

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