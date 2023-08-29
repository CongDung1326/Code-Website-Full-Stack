let specialtyAPIsService = require('../services/specialtyAPIsService.js');

let handleCreateNewSpecialty = async (req, res) => {
    try {
        let data = req.body;
        let infor = await specialtyAPIsService.createNewSpecialty(data);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleGetAllSpecialty = async (req, res) => {
    try {
        let infor = await specialtyAPIsService.getAllSpecialty();

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
    handleCreateNewSpecialty: handleCreateNewSpecialty,
    handleGetAllSpecialty: handleGetAllSpecialty,
}