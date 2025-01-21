import express from "express"
import employeeDetails from "./routes/employee.Routes.js"
import { connectDB } from "./lib/db.js";
import cors from "cors"; 

const app = express();
const PORT = 8000;
app.use(cors());

connectDB();

app.use(express.json())

app.use("/employee_details",employeeDetails);

app.listen(PORT,()=>{
console.log(`My App runing port: http://localhost:${PORT}`)
})