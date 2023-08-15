const doctorAPIsService = require('../services/doctorAPIsService.js');

let handleGetDoctorHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;

    try {
        let doctors = await doctorAPIsService.getDoctorHome(+limit); // Thêm dấu + để cho nó biết đây là kiểu số nguyên (nếu không để thì mặc định nó sẽ là string nên nó sẽ báo lỗi)
        return res.status(200).json(doctors);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = {
    handleGetDoctorHome: handleGetDoctorHome
}