const employeesCtroler = {};
const Employee = require("../models/Employee");

employeesCtroler.getEmployees = async (req, res) => {
  const allEmployees = await Employee.find();
  res.json(allEmployees);
};

employeesCtroler.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id)
  res.json(employee);
};

employeesCtroler.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  console.log(req.body)
  await newEmployee.save()
  res.send({message: "Employee created succesfully"});
};

employeesCtroler.updateEmployee = async(req, res) => {
  const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.json(updateEmployee);
};
employeesCtroler.deleteEmployee = async(req, res) => {
  const deleteEmploye = await Employee.findByIdAndDelete(req.params.id)
  res.send({message: "Employee deleteed"});
};

module.exports = employeesCtroler;
