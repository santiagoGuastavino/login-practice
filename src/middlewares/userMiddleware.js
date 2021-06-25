let userMiddleware = (req,res,next) => {
    if (req.session.user) {
        res.locals.user = true;
        res.locals.user = req.session.user;
    };
    next();
};

module.exports = userMiddleware;