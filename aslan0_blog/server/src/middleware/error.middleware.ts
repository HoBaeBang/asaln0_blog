import { ErrorRequestHandler } from 'express';
import { HttpException } from '../common/exceptions/http.exception';

export const errorMiddleware: ErrorRequestHandler = (
    err: HttpException,
    req,
    res,
    next,
) => {
    const status = err.status || 404;
    const message = err.message;
    res.status(status).json({
        "success":false,
        "response":null,
        "error":{"status":status,"message":message}
    });

    next();
};