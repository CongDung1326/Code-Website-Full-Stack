// import axios from "../axios";
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
    return await fetch(`http://localhost:8080/api//save-info-doctor`, {
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

export { handleLogin, getAllUsers, addNewUser, deleteUser, EditUser, handleGetAllCode, handleGetDoctorHome, handleGetAllDoctor, handlePostSaveInfoDoctor }