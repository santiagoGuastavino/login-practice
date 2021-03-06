let express = require('express');
let app = express();
let path = require('path');
let session = require('express-session');
let cookies = require('cookie-parser');

let viewsPath = path.join(__dirname + '/views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(express.static('public'));
app.use(express.urlencoded ( { extended: false } ));
app.use(express.json());
app.use(session({ 
    secret: 'session-secret',
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());

let userMiddleware = require('./middlewares/userMiddleware');

app.use(userMiddleware);

let mainRouter = require('./routes/main');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));