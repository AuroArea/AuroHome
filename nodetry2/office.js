var empl = require("./employee");

var empData = {"name": "Aurobinda", "location":"Bangalore"};
var emp = new empl(empData.name, empData.location);

function office () {
	this.empjsonObj;
}

office.prototype.setOfficeDetails = function(officeData) {

	this.empjsonObj = { name: emp.name,
						location: emp.location,
						project: officeData.project,
						dept: officeData.dept
					};
}

office.prototype.getOfficeDetails = function() {
	return this.empjsonObj;
}

module.exports = office;