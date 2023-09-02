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

let handleGetAllDoctor = async (req, res) => {
    try {
        let doctors = await doctorAPIsService.getAllDoctor();

        return res.status(200).json(doctors);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let handleCreateInfoDoctor = async (req, res) => {
    try {
        let data = req.body;
        let info = await doctorAPIsService.postCreateInfoDoctor(data);

        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...',
        })
    }
}

let handleGetDetailDoctor = async (req, res) => {
    try {
        let id = req.query.id;
        let detail = await doctorAPIsService.getDetailDoctor(id);

        return res.status(200).json(detail);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let handleSaveDetailDoctor = async (req, res) => {
    try {
        let data = req.body;
        let edit = await doctorAPIsService.putSaveDetailDoctor(data);

        return res.status(200).json(edit)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleBulkCreateSchedule = async (req, res) => {
    try {
        let data = req.body;
        let bulk = await doctorAPIsService.postBulkCreateSchedule(data);

        return res.status(200).json(bulk);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleGetScheduleByDate = async (req, res) => {
    try {
        let { id, date } = req.query;
        let infor = await doctorAPIsService.getScheduleByDate(id, date);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleCreateMoreInfoDoctor = async (req, res) => {
    try {
        let data = req.body;
        let info = await doctorAPIsService.postMoreInfoDoctor(data);

        return res.status(200).json(info)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleEditMoreInfoDoctor = async (req, res) => {
    try {
        let data = req.body;
        let info = await doctorAPIsService.putMoreInfoDoctor(data);

        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleGetMoreInfoDoctor = async (req, res) => {
    try {
        let id = req.query.doctorId;
        let info = await doctorAPIsService.getMoreInfoDoctor(id);

        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleGetProfileDoctorById = async (req, res) => {
    try {
        let id = req.query.id;
        let info = await doctorAPIsService.getProfileDoctorById(id);

        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handlePostSendRemedy = async (req, res) => {
    try {
        let data = req.body;
        let info = await doctorAPIsService.postSendRemedy(data);

        return res.status(200).json(info);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

module.exports = {
    handleGetDoctorHome: handleGetDoctorHome,
    handleGetAllDoctor: handleGetAllDoctor,
    handleCreateInfoDoctor: handleCreateInfoDoctor,
    handleGetDetailDoctor: handleGetDetailDoctor,
    handleSaveDetailDoctor: handleSaveDetailDoctor,
    handleBulkCreateSchedule: handleBulkCreateSchedule,
    handleGetScheduleByDate: handleGetScheduleByDate,
    handleCreateMoreInfoDoctor: handleCreateMoreInfoDoctor,
    handleEditMoreInfoDoctor: handleEditMoreInfoDoctor,
    handleGetMoreInfoDoctor: handleGetMoreInfoDoctor,
    handleGetProfileDoctorById: handleGetProfileDoctorById,
    handlePostSendRemedy: handlePostSendRemedy,
}