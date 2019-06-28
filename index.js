const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser')
require('./models/User');
require('./services/passport');
const app = express();


if (process.env.NODE_ENV === 'production') {
    //1. EXPRESS WILL SERVE UP PRODUCTION ASSETS
    // LIKE OUR MAIN.JS FILE, OR MAIN.CSS FILE
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client/build')))
    //2. EXPRESS WILL SERVE UP THE INDEX.HTML FILE
    // IF IT DOESN'T RECOGNIZE THE ROUTE

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.use(
    '/api',
    proxy({ target: 'localhost:5000', changeOrigin: true })
);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send({ "bye": "buddy" })
});

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is running')
});
