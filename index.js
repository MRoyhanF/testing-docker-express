import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AssesmentRoute from "./routes/AssesmentRoute.js";
import PostingRoute from "./routes/PostingRoute.js";
import CommentRoute from "./routes/CommentRoute.js";
import RoomRoute from "./routes/RoomRoute.js";
import UserRoomRoute from "./routes/UserRoomRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
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