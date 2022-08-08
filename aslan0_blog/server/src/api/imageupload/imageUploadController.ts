import {Controller} from "../../common/interfaces/controller.interface";
import {Router} from "express";
import {imageUploadService} from "./imageUploadService";


export default class ImageUploadController implements Controller {
    path = "/posting";
    router= Router();

    constructor() {

    }

    InitializeRoutes(){
        const router = Router();
        router.post("", imageUploadService.upload);
    }
};