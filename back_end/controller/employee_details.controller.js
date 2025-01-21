import Employee from "../models/employee_details.models.js"

export const NewEmployee = async (req, res) => {
    const newEmployee = new Employee({
        name: req.body.name,
        age: req.body.age,
        education: req.body.education,
        experience: req.body.experience,
        graduate_year: req.body.graduate_year
    })
    console.log("hiiiii", req.body);
    try {
        const employee = await newEmployee.save();
        console.log("hi", employee);
        return res.status(202).json({
            data: [employee],
            message: "save data sucessfully",
            status: 200
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

export const FindAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find()
        return res.status(202).json({
            data: employee,
            message: "Employee Details Retrive Sucessfully",
            status: 200
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            status: 500
        })
    }
}

export const FindEmployee = async (req, res) => {
    console.log("employee", req.params.id);
    try {
        const employee = await Employee.findById(req.params.id);
        console.log("employeeakcbkajsbcask", employee);
        if (employee == null) {
            return res.status(404).json({ message: "Cannot find Employee" })
        } else {
            res.json(employee)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

export const UpdateEmployee = async (req, res) => {
    try {
        const updateemployee = await Employee.findOneAndUpdate(
            { _id: req.params.id }, {
            name: req.body.name,
            age: req.body.age,
            education: req.body.education,
            experience: req.body.experience,
            graduate_year: req.body.graduate_year
        }, {
            new: true
        }
        )
        res.status(202).json({
            data: updateemployee,
            message: "update employee sucessfully",
            status: 200
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

export const DeleteEmployee = async (req, res) => {
    const employeeId = req.params.id;
    try {
        const employeeResult = await Employee.deleteOne({ _id: employeeId })
        res.json({
            message: "Employee Details Deleted Sucessfully"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}