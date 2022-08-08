import * as express from "express";
import { Router } from 'express'
import {Controller} from "../../common/interfaces/controller.interface";
import {HomeService} from "./home.service";



export default class HomeController implements Controller {
    path= "/home";
    router= Router();

    constructor() {
        this.InitializeRoutes();
    }

    InitializeRoutes() {
        const router = Router();
        router
            .get('/',HomeService.getHome)
        this.router.use(this.path, router);
    }


};
