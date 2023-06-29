const db = require('../models/index.js') // Lấy dữ liệu database

let getHomePage = async (req, res) => {
    // Mỗi lần làm việc với database thì nên vứt vào try and catch
    try {
        // Coppy user ở file user.js tại phần modelName (Nó có phân biệt chữ hoa và chữ thường)
        let data = await db.User.findAll(); // Do thằng db là 1 thằng bất đồng bộ nên phải sử dụng câu lệnh await

        // Kiểm tra dữ liệu sql
        // console.log('-------------------------------');
        // console.log(data); // Trả về object của sql
        // console.log('-------------------------------');

        return res.render('homePage.ejs', {
            data: JSON.stringify(data) // Đẩy qua ejs thằng data
        }); // render là xuất cái file homePage.ejs lên web
    } catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('./test/aboutPage.ejs'); // Tại mặc định thằng viewEngine ta config cho nó là ./src/views nên chỉ cần ./test là ra được file aboutPage.ejsy
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}