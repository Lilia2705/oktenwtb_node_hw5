const express = require('express');
const exprHb = require('express-handlebars');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(fileUpload({}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.use(express.static(resolve(__dirname, 'public')));
global.appRoot = __dirname;

app.engine('.hbs', exprHb({
    defaultLayout: null,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {getUsersPages, getHousesPages} = require('./getPages');
const {userRouter, houseRouter, authRouter} = require('./router');

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
    console.log('3000');
});