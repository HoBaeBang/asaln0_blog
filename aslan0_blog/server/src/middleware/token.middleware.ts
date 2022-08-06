import { Handler, Request, Response, NextFunction } from 'express';
import { ForbiddenException, UnauthorizedException } from '../common/exceptions';
import jwt from '../modules/jwt';

export const verifyJWT: Handler = (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.header('authorization');
    if (bearerToken) {
        try {
            const token = bearerToken.replace(/^Bearer /, '');
            const decoded = jwt.jwtVerify(token);
            console.log(decoded)
            next();
        } catch (err) {
            const error = new UnauthorizedException()
            next(error);
        }
    } else {
        const error = new ForbiddenException()
        next(error)
    }
};