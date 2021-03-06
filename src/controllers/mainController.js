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
            req.session.user = user;
            if (req.body.remember) {
                res.cookie('userColor', req.body.color, { maxAge: (1000 * 60) * 60 });
            };
            res.redirect('/');
        };
    },

    thanks: (req,res) => {
        res.render('thanks');
    },

    reset: (req,res) => {
        req.session.destroy();
        res.clearCookie('userColor');
        res.redirect('/');
    },
};

module.exports = mainController;