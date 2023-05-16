import express from "express"
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controller"
const router=express.Router()

/*
    /
    /:id dynamic
    /admins

*/
router.get('/',getUsers)
router.get("/admins",getAdminUsers)
router.post('/create-user',createUser);
router.get('/:id',getUserById);


export default router;