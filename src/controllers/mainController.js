let mainController = {
    home: (req,res) => {
        res.render('index')
    },

    user: (req,res) => {
        let user = {
            ...req.body
        };
        req.session.user = user;
        res.redirect('/');
    },
};

module.exports = mainController;