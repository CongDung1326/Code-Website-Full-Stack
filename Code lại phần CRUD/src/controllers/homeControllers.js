const db = require('../models/index.js') // Lấy dữ liệu database
const CRUDService = require('../services/CRUDService.js');

let getHomePage = async (req, res) => {
    // Mỗi lần làm việc với database thì nên vứt vào try and catch
    try {
        // Coppy user ở file user.js tại phần modelName (Nó có phân biệt chữ hoa và chữ thường)
        let data = await db.User.findAll(); // Do thằng db là 1 thằng bất đồng bộ nên phải sử dụng câu lệnh await

        // Kiểm tra dữ liệu sql
        // console.log('-------------------------------');
        // console.log(data); // Trả về object của sql
        // console.log('-------------------------------');

        return res.render('./homePage.ejs', {
            data: JSON.stringify(data) // Đẩy qua ejs thằng data
        }); // render là xuất cái file homePage.ejs lên web
    } catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('./test/aboutPage.ejs'); // Tại mặc định thằng viewEngine ta config cho nó là ./src/views nên chỉ cần ./test là ra được file aboutPage.ejsy
}

let getCreateUser = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let infoUser = req.body;
    await CRUDService.createUser(infoUser);
    return res.send('Create user is success!');
}

let getEditCRUD = async (req, res) => {
    let allUser = await CRUDService.findAllUser();

    return res.render('editCRUD.ejs', {
        dataTable: allUser
    });
}

let getEditCRUDInfomation = async (req, res) => {
    let useId = req.query.id;
    // Check use ton` tai
    if (useId) {
        let user = await CRUDService.findUserById(useId);
        return res.render('editCRUDInfomation.ejs', {
            data: user
        });
    }
    else {
        res.send("Can't defind the id");
    }
}

let postEditCRUD = async (req, res) => {
    let userId = req.body;
    let allUser = await CRUDService.updateUser(userId);
    return res.render('editCRUD.ejs', {
        dataTable: allUser
    });
}

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    let allUser = await CRUDService.deleteCRUD(userId);
    return res.render('editCRUD.ejs', {
        dataTable: allUser
    });

}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCreateUser: getCreateUser,
    postCRUD: postCRUD,
    getEditCRUD: getEditCRUD,
    getEditCRUDInfomation: getEditCRUDInfomation,
    postEditCRUD: postEditCRUD,
    deleteCRUD: deleteCRUD
}