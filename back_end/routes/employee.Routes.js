import express from "express"
import {DeleteEmployee, FindAllEmployee , FindEmployee, NewEmployee, UpdateEmployee } from "../controller/employee_details.controller.js"

const router = express.Router()

router.get("/",FindAllEmployee);

router.get("/:id",FindEmployee);

router.post("/create/",NewEmployee);

router.put("/:id",UpdateEmployee)

router.delete("/:id",DeleteEmployee)

export default router;