const express = require('express');
const exprHb = require('express-handlebars');
const path = require('path');

const db = require('./dataBase').getInstance();
db.setModels();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));


app.engine('.hbs', exprHb({
    defaultLayout: null,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {getUsersPages, getHousesPages} = require('./getPages');
let {user} = require('./controllers');
let {userMiddleware} = require('./middleware');
let {userRouter, houseRouter, authRouter} = require('./router');

app.get ('/', getUsersPages.getMainPage);
app.get ('/register', getUsersPages.getRegisterPage);
app.get ('/login', getUsersPages.getLoginPage);
app.get ('/new-house', getHousesPages.getHouseMainPage);

// app.post('/auth', userMiddleware.checkUserIsInDb, user.getUser);


app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);


app.all('*', getUsersPages.getErrorPage);


app.listen(3000, () => {
    console.log('HELLO');
});