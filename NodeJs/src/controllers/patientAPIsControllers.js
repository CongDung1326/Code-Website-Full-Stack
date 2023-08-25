let patientAPIsService = require('../services/patientAPIsService.js');

let postBookAppointment = async (req, res) => {
    try {
        let data = req.body;
        let infor = await patientAPIsService.postBookAppointment(data);

        return res.status(200).json(infor)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

module.exports = {
    postBookAppointment: postBookAppointment,
}