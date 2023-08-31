let clinicAPIsService = require('../services/clinicAPIsService.js');

let handleCreateNewClinic = async (req, res) => {
    try {
        let data = req.body;
        let infor = await clinicAPIsService.createNewClinic(data);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleGetAllClinic = async (req, res) => {
    try {
        let { id, location } = req.query;
        let infor = await clinicAPIsService.getAllClinic(id, location);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

module.exports = {
    handleCreateNewClinic: handleCreateNewClinic,
    handleGetAllClinic: handleGetAllClinic,
}