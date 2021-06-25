let userMiddleware = (req,res,next) => {
    res.locals.user = false;
    res.locals.color = false
    let colorInCookie = req.cookies.userColor;
    if (req.session.user) {
        res.locals.user = true;
        res.locals.user = req.session.user;
    };
    if (colorInCookie) {
        res.locals.color = true;
        res.locals.color = colorInCookie;
    };
    next();
};

module.exports = userMiddleware;