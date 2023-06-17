const { Router } = require("express");

const router = Router();

const employees = require("../controllers/employees.controllers.js");

router.get("/", employees.getEmployees /*cierta funcion*/);
router.post("/", employees.createEmployee /*cierta funcion*/);
router.get("/:id", employees.getEmployee /*cierta funcion*/);
router.put("/:id", employees.updateEmployee /*cierta funcion*/);
router.delete("/:id", employees.deleteEmployee /*cierta funcion*/);

module.exports = router;
