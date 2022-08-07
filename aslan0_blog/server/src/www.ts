import App from "./index";
// import {createConnection} from 'typeorm'
// import "dotenv/config"
// import connection from '../data-source'
// import AuthController from '../api/v1/auth/auth.controller';
// import UserController from '../api/user/user.route'
// import BoardController from '../api/board/board.route'
import HomeController from "./api/home/home.controller";

async function startServer() {
    // await createConnection(connection).catch(err => {
    //     console.log("DB CONNECTION ERROR", err);
    // })
    const app = new App([
        new HomeController(),
        ]);
    app.listen()
}

startServer()