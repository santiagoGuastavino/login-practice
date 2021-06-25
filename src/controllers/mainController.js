let { validationResult } = require('express-validator');

let mainController = {
    home: (req,res) => {
        res.render('index')
    },

    user: (req,res) => {        
        let validations = validationResult(req);
        if (validations.errors.length > 0) {
            let oldData = req.body;
            res.render('index', { oldData, 'errors':validations.mapped() } );
        }else{
            let user = {
                ...req.body
            };
            let userColor = req.body.color;
            req.session.user = user;
            req.session.color = userColor;
            res.redirect('/');
        };
    },

    thanks: (req,res) => {
        res.render('thanks');
    },
};

module.exports = mainController;