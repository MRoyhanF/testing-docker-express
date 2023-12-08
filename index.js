const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const db = require('./config/Database.js');
const SequelizeStore = require('connect-session-sequelize');
const UserRoute = require('./routes/UserRoute.js');
const AssesmentRoute = require('./routes/AssesmentRoute.js');
const PostingRoute = require('./routes/PostingRoute.js');
const CommentRoute = require('./routes/CommentRoute.js');
const RoomRoute = require('./routes/RoomRoute.js');
const UserRoomRoute = require('./routes/UserRoomRoute.js');
const AuthRoute = require('./routes/AuthRoute.js');

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})

// // ----create db
// (async()=> {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUnitialized : true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(AssesmentRoute);
app.use(PostingRoute);
app.use(CommentRoute);
app.use(RoomRoute);
app.use(UserRoomRoute);
app.use(AuthRoute);

// // ----create db session
// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...')
});