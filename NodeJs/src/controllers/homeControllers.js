export let getHomePage = (req, res) => {
    return res.render('homePage.ejs'); // render là xuất cái file homePage.ejs lên web
}

export let getAboutPage = (req, res) => {
    return res.render('./test/aboutPage.ejs'); // Tại mặc định thằng viewEngine ta config cho nó là ./src/views nên chỉ cần ./test là ra được file aboutPage.ejs
}