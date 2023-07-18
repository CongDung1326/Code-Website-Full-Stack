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

export { handleLogin, getAllUsers }