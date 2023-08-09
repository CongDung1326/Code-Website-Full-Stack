// Learning Redux
import actionTypes from './actionTypes';
// Call API
import { handleGetAllCode } from '../../services/userServices'

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
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
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})