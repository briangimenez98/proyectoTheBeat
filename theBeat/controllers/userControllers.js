module.exports = {
    login: function(req, res) {
        return res.render('login')
    },
    loginProcess: function(req, res) {
        return res.render('/')
    },
    register: function(req, res) {
        return res.render('register')
    }
}