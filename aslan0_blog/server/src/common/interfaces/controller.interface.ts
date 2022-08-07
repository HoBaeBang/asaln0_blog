import express, {Router} from 'express';

export interface Controller {
    path: string;
    router:Router;
}