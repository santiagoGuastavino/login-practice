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
            res.redirect('/');
        };
    },
};

module.exports = mainController;