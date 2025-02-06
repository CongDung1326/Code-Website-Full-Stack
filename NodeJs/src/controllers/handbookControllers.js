const handbookService = require("../services/handbookService");

let handleCreateNewHandbook = async (req, res) => {
    try {
        let data = req.body;
        let infor = await handbookService.createNewHandbook(data);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleGetAllHandbook = async (req, res) => {
    try {
        let { id } = req.query;
        let infor = await handbookService.getAllHandbook(id);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

let handleDeleteHandbook = async (req, res) => {
    try {
        let { id } = req.body;
        let infor = await handbookService.deleteHandbook(id);

        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server!'
        })
    }
}

module.exports = ({
    handleCreateNewHandbook: handleCreateNewHandbook,
    handleGetAllHandbook: handleGetAllHandbook,
    handleDeleteHandbook: handleDeleteHandbook,
})