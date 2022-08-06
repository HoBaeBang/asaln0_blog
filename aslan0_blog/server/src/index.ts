import express from "express"
import { application, Router } from 'express'
import { Application } from 'express'
import {Controller} from './common/interfaces/controller.interface';
import config from 'config';
import {errorMiddleware} from "./middleware/error.middleware";
import Passport from "passport";

const ServerConfig = config.get('server');
export default class App{
    private readonly app: express.Application;

    constructor(controllers: Controller[]){
        this.app = express();
        this.initializeMiddlewares();
        this.initializeController(controllers);
        this.initializeErrorHandling();
    }
    //  미들웨어처리
    private initializeMiddlewares(){
        this.app.use(express.json());
        // this.app.use(
        //     session({
        //         name: 'prgrms.sid',
        //         secret: 'keyboard cat',
        //         resave: false,
        //         saveUninitialized: true,
        //     }),
        // );
        Passport();     //인증에 관한내용 인증을 도와주는 미들웨어로 사용하면 Oauth와 세션 쿠키 관리가 편해집니다.
    }

    //  에러 핸들러
    private initializeErrorHandling(){
        this.app.use(errorMiddleware);
    }

    //  컨트롤러를통한 url 접근 제어
    private initializeController(controllers: Controller[]){
        const router = Router();
        router.get('/',(req,res)=>res.send("ok"));

        controllers.forEach((controller)=>{
            router.use(controller.router);
            console.log(controller);
        });
        this.app.use('/api',router);            //  /api라는 url이 들어오면 라우터로 동작하라 라는 말임
    }

    public getServer() {
        return this.app;
    }
}