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

let getCRUD = (req, res) => {
    return res.render('./crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    //console.log(req.body); // Lấy các tham số từ phía client gửi cho chúng ta
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
    return res.render('displayCRUD.ejs', { // Gửi dữ liệu qua displayCRUD.ejs thì dùng thằng object kiểu này
        dataTable: data
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}