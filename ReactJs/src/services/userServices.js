// import axios from "../axios";
import axios from 'axios'
import qs from 'querystring' // Thằng này có thể biến chuỗi của ta thành 1 query string (để cho website có thể hiểu)

let handleLogin = async (username, password) => {
    // console.log ra để hiểu thêm về thằng querystring
    //console.log(qs.stringify([username, password]))

    return await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            email: username,
            password: password
        })
    }).then(res => res.json())
}

let getAllUsers = async (id) => {
    let users = await fetch(`http://localhost:8080/api/get-all-users?id=${id}`, {
        method: 'GET', // method get thì sẽ không chuyền tham số body
    }).then(res => res.json())

    return users;
}

let addNewUser = async (data) => {
    return await fetch('http://localhost:8080/api/create-new-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            positionId: data.positionId,
            roleId: data.roleId,
            image: data.image
        })
    }).then(res => res.json());
}

let deleteUser = async (id) => {
    return await fetch('http://localhost:8080/api/delete-user', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            id: id
        })
    }).then(res => res.json())
}

let EditUser = async (data) => {
    return await fetch('http://localhost:8080/api/edit-user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            roleId: data.roleId,
            positionId: data.positionId,
            image: data.image,
        })
    }).then(res => res.json())
}

let handleGetAllCode = async (inputData) => {
    return await fetch(`http://localhost:8080/api/all-codes?type=${inputData}`, {
        method: "GET"
    }).then(res => res.json())
}

let handleGetDoctorHome = async (limit) => {
    return await fetch(`http://localhost:8080/api/get-doctor-home?type=${limit}`, {
        method: 'GET'
    }).then(res => res.json())
}

let handleGetAllDoctor = async () => {
    return await fetch(`http://localhost:8080/api/get-all-doctor`, {
        method: 'GET'
    }).then(res => res.json());
}

let handlePostSaveInfoDoctor = async (data) => {
    return await fetch(`http://localhost:8080/api/save-info-doctor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            id: data.id,
            contentHTML: data.contentHTML,
            contentMarkdown: data.contentMarkdown,
            description: data.description,
        })
    }).then(res => res.json())
}

let getDetailDoctor = async (id) => {
    return await fetch(`http://localhost:8080/api/get-detail-doctor-by-id?id=${id}`, {
        method: 'GET'
    }).then(res => res.json());
}

let saveDetailDoctor = async (data) => {
    return await fetch(`http://localhost:8080/api/save-detail-doctor`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            id: data.id,
            contentHTML: data.contentHTML,
            contentMarkdown: data.contentMarkdown,
            description: data.description,
        })
    }).then(res => res.json())
}

let bulkCreateSchedule = async (data) => {
    return axios.post(`http://localhost:8080/api/bulk-create-schedule`, data)
}

let getScheduleByDate = async (id, date) => {
    return await fetch(`http://localhost:8080/api/get-schedule-doctor-by-date?id=${id}&date=${date}`, {
        method: 'GET'
    }).then(res => res.json());
}

let postMoreInfoDoctor = async (data) => {
    return await fetch(`http://localhost:8080/api/create-more-info-doctor`, {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            doctorId: data.doctorId,
            specialtyId: data.specialtyId,
            clinicId: data.clinicId,
            priceId: data.priceId,
            provinceId: data.provinceId,
            paymentId: data.paymentId,
            addressClinic: data.addressClinic,
            nameClinic: data.nameClinic,
            note: data.note,
        })
    }).then(res => res.json())
}

let putMoreInfoDoctor = async (data) => {
    return await fetch(`http://localhost:8080/api/edit-more-info-doctor`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            doctorId: data.doctorId,
            specialtyId: data.specialtyId,
            clinicId: data.clinicId,
            priceId: data.priceId,
            provinceId: data.provinceId,
            paymentId: data.paymentId,
            addressClinic: data.addressClinic,
            nameClinic: data.nameClinic,
            note: data.note,
        })
    }).then(res => res.json())
}

let getMoreInfoDoctor = async (id) => {
    return await fetch(`http://localhost:8080/api/get-more-info-doctor?doctorId=${id}`, {
        method: "GET",
    }).then(res => res.json())
}

let getProfileDoctorById = async (id) => {
    return await fetch(`http://localhost:8080/api/get-profile-doctor-by-id?id=${id}`, {
        method: "GET",
    }).then(res => res.json())
}

let postBookAppointment = async (data) => {
    return await fetch(`http://localhost:8080/api/patient-book-appointment`, {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            doctorId: data.doctorId,
            email: data.email,
            date: data.date,
            timeType: data.timeType,
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            address: data.address,
            reasonForExamination: data.reasonForExamination,
            gender: data.gender,
            datePlace: data.datePlace,
            timePlace: data.timePlace,
            nameDoctor: data.nameDoctor,
            language: data.language,
        })
    }).then(res => res.json())
}

let postVerifyBookAppointment = async (data) => {
    return await fetch(`http://localhost:8080/api/verify-booking`, {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            doctorId: data.doctorId,
            token: data.token,
        })
    }).then(res => res.json())
}

let createNewSpecialty = async (data) => {
    return await fetch(`http://localhost:8080/api/create-new-specialty`, {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            name: data.name,
            descriptionHTML: data.descriptionHTML,
            descriptionMarkdown: data.descriptionMarkdown,
            image: data.image,
        })
    }).then(res => res.json())
}

let getAllSpecialty = async (id, location) => {
    return await fetch(`http://localhost:8080/api/get-all-specialty?id=${id}&location=${location}`, {
        method: "GET",
    }).then(res => res.json())
}

let createNewClinic = async (data) => {
    return await fetch(`http://localhost:8080/api/create-new-clinic`, {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, // Bắt buộc ép nó ra kiểu x-www-form-urlencoded
        body: qs.stringify({
            name: data.name,
            descriptionHTML: data.descriptionHTML,
            descriptionMarkdown: data.descriptionMarkdown,
            image: data.image,
            address: data.address,
        })
    }).then(res => res.json())
}

let getAllClinic = async (id, location) => {
    return await fetch(`http://localhost:8080/api/get-all-clinic?id=${id}&location=${location}`, {
        method: "GET",
    }).then(res => res.json())
}

let getPatientForDoctor = async (doctorId, date) => {
    return await fetch(`http://localhost:8080/api/get-list-patient-for-doctor?doctorId=${doctorId}&date=${date}`, {
        method: "GET",
    }).then(res => res.json())
}

export { getPatientForDoctor, getAllClinic, createNewClinic, getAllSpecialty, createNewSpecialty, postVerifyBookAppointment, postBookAppointment, getProfileDoctorById, getMoreInfoDoctor, putMoreInfoDoctor, postMoreInfoDoctor, getScheduleByDate, bulkCreateSchedule, handleLogin, getAllUsers, addNewUser, deleteUser, EditUser, handleGetAllCode, handleGetDoctorHome, handleGetAllDoctor, handlePostSaveInfoDoctor, getDetailDoctor, saveDetailDoctor }