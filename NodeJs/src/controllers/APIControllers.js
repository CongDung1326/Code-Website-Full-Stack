const APIsService = require('../services/APIsService.js');

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await APIsService.handleUserLogin(email, password);

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
    test: test
}