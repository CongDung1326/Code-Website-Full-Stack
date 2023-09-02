import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    dataDoctor: [],
    dataAllDoctor: [],
    detailDoctor: null,
    hourScheduleDoctor: [],
    priceData: [],
    paymentData: [],
    provinceData: [],
    doctorInfo: null,
    profileDoctor: {},
    specialties: [],
    provinces: [],
    clinics: [],
    patientBooking: [],
    isSendRemedy: false,
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            //console.log('Check fetch reducer start', action);
            state.isLoadingGender = true;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            //console.log('Check fecth reducer success ', action)
            state.genders = action.genders;
            state.isLoadingGender = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            //console.log('Check fecth reducer failed ', action)
            state.isLoadingGender = false;
            return {
                ...state,
            }

        // Position
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.positions;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state,
            }

        // Role
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.roles;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            return {
                ...state,
            }

        // Get user
        case actionTypes.GET_USER_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.GET_USER_FAILED:
            state.users = [];
            return {
                ...state,
            }

        // Get data doctor home
        case actionTypes.GET_DOCTOR_HOME_SUCCESS:
            state.dataDoctor = action.dataDoctor;
            return {
                ...state,
            }
        case actionTypes.GET_DOCTOR_HOME_FAILED:
            state.dataDoctor = [];
            return {
                ...state,
            }

        // Get all data doctor
        case actionTypes.GET_ALL_DOCTOR_SUCCESS:
            state.dataAllDoctor = action.dataAllDoctor;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_DOCTOR_FAILED:
            state.dataAllDoctor = [];
            return {
                ...state,
            }

        // Get detail doctor
        case actionTypes.GET_DETAIL_DOCTOR_SUCCESS:
            state.detailDoctor = action.detailDoctor;
            return {
                ...state,
            }
        case actionTypes.GET_DETAIL_DOCTOR_FAILED:
            state.detailDoctor = null;
            return {
                ...state,
            }

        // Get detail doctor
        case actionTypes.GET_HOUR_SCHEDULE_DOCTOR_SUCCESS:
            state.hourScheduleDoctor = action.hourScheduleDoctor;
            return {
                ...state,
            }
        case actionTypes.GET_HOUR_SCHEDULE_DOCTOR_FAILED:
            state.hourScheduleDoctor = [];
            return {
                ...state,
            }

        // Get select more info doctor
        case actionTypes.GET_SELECT_MORE_INFO_DOCTOR_SUCCESS:
            state.priceData = action.priceData;
            state.paymentData = action.paymentData;
            state.provinceData = action.provinceData;
            return {
                ...state,
            }
        case actionTypes.GET_SELECT_MORE_INFO_DOCTOR_FAILED:
            state.allMethodInfoDoctor = null;
            return {
                ...state,
            }

        // Get more info doctor
        case actionTypes.GET_MORE_INFO_DOCTOR_SUCCESS:
            state.doctorInfo = action.doctorInfo;
            return {
                ...state,
            }
        case actionTypes.GET_MORE_INFO_DOCTOR_FAILED:
            state.doctorInfo = null;
            return {
                ...state,
            }

        // Get profile doctor by id
        case actionTypes.GET_PROFILE_DOCTOR_BY_ID_SUCCESS:
            state.profileDoctor = action.profileDoctor;
            return {
                ...state,
            }
        case actionTypes.GET_PROFILE_DOCTOR_BY_ID_FAILED:
            state.profileDoctor = {};
            return {
                ...state,
            }

        // Get all specialty
        case actionTypes.GET_ALL_SPECIALTY_SUCCESS:
            state.specialties = action.specialties;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_SPECIALTY_FAILED:
            state.specialties = [];
            return {
                ...state,
            }

        // Get all province
        case actionTypes.GET_ALL_PROVINCE_SUCCESS:
            state.provinces = action.provinces;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_PROVINCE_FAILED:
            state.provinces = [];
            return {
                ...state,
            }

        // Get all clinic
        case actionTypes.GET_ALL_CLINIC_SUCCESS:
            state.clinics = action.clinics;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_CLINIC_FAILED:
            state.clinics = [];
            return {
                ...state,
            }

        // Get patient for doctor
        case actionTypes.GET_PATIENT_FOR_DOCTOR_SUCCESS:
            state.patientBooking = action.patients;
            return {
                ...state,
            }
        case actionTypes.GET_PATIENT_FOR_DOCTOR_FAILED:
            state.patientBooking = [];
            return {
                ...state,
            }

        // Post send remedy
        case actionTypes.POST_SEND_REMEDY_SUCCESS:
            state.isSendRemedy = action.isSuccess;
            return {
                ...state,
            }
        case actionTypes.POST_SEND_REMEDY_FAILED:
            state.isSendRemedy = false;
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;