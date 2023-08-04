const userAPIsService = require('../services/userAPIsService.js');

// Sự khác nhau giữa req.body và req.query
// - query là các tham số truyền vào VD: localhost:8080?id=8 (? là query và id là name parameter)
// - body là các tham số ẩn (đã truyền vào) không cho người khác thấy

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userAPIsService.handleUserLogin(email, password);

    // status là trạng thái sau đó in ra file json (hiểu thêm thì tìm lại khoá học learning NodeJS)
    return res.status(200).json({
        // errCode: 0,
        // message: 'ok',
        // email: email, // để điền được giá trị vào thằng email này thì lên postman vào phần body chọn x-www-form-urlencoded
        // test: 'test',
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; // ALL, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Missing required parameter',
            users: []
        })
    }

    let user = await userAPIsService.getALlUsers(id);

    return res.status(200).json({
        errCode: 0,
        message: 'ok',
        users: user
    })
}

let handleCreateUser = async (req, res) => {
    let user = req.body;

    if (!user.email || !user.password) {
        return res.status(200).json({
            errCode: 2,
            message: 'Plz write full email and password',
        })
    }
    let message = await userAPIsService.createNewUser(user);

    return res.status(200).json({
        message
    })
}

let handleDeleteUser = async (req, res) => {
    let id = req.body.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Missing required parameters!'
        })
    }

    let message = await userAPIsService.deleteUser(id);

    return res.status(200).json({
        message
    })
}

let handleEditUser = async (req, res) => {
    let data = req.body;
    if (!data.id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Missing required parameters!'
        })
    }

    let message = await userAPIsService.updateUserData(data);

    return res.status(200).json({
        message
    })
}

let getAllCodes = async (req, res) => {
    try {
        let type = req.query.type;
        let data = await userAPIsService.getAllCodes(type);

        return res.status(200).json({
            data
        });
    } catch (e) {
        console.log('Check code >>> ', e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}


let test = (req, res) => {
    return res.status(200).json({
        message: 'ok',
        yourName: {
            firstName: 'Hoang',
            lastName: 'Cong Dung'
        },
        bietDanh: ['Don Vau', 'Khong ngai va cham']
    })
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateUser: handleCreateUser,
    handleDeleteUser: handleDeleteUser,
    handleEditUser: handleEditUser,
    getAllCodes: getAllCodes,
    test: test
}