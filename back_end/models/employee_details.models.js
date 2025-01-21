import {Schema,model} from "mongoose";

const schema = Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    graduate_year:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required:true
    }
})

const Employee_Details = model("Employee",schema);

export default Employee_Details;