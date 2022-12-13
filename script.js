console.log("Working!");
$(onReady);


$(document).ready() ;{
	
}
// jQuery
function onReady() {
	console.log("Still ready!");

	// on click to submit employee information.
	$("#submit-button").on("click", submitInformation);
	// $("#submit-button").on("click", function() {
	// 	console.log("brent test");
	// });
	$("#remove-button").on("click", removeEmployee);
	// $(".table-employee").on("click", addToTable);
} // end of onReady.

// Array of Employees.
let employees = [];

// Function that stores Employee Information into the array of employees
function submitInformation() {
	console.log("test submit");
	// store employee input values
	let fName = $(".user-input-f-name").val();
	let lName = $(".user-input-l-name").val();
	let employeeId = $(".user-input-id").val();
	let employeeTitle = $(".user-input-title").val();
	let employeeAS = $(".user-input-a-s").val();

	let employee = {
		firstName: fName,
		lastName: lName,
		employeeIdentification: employeeId,
		titleOfEmployee: employeeTitle,
		employeeAnnualSalary: employeeAS,
	};
	// input values of employees
	// let addedEmployee = { firstName, lastName, employeeIdentification, titleOfEmployee, employeeAnnualSalary};
	// push input values into employee array
	employees.push(employee);

	// on click reset input placeholders
	//$("input").val("");
	console.log(employees);

	addRowToTable();
} // end of submitInformation

function addRowToTable() {

	$(".table-employee").empty();

	//let row = 1;
	for (employee of employees) {
		console.log("working!");
		$(".table-employee").append(`
		<tr>
			<td>${employee.firstName}</td>
			<td>${employee.lastName}</td>
			<td>${employee.employeeIdentification}</td>
			<td>${employee.titleOfEmployee}</td>
			<td>${employee.employeeAnnualSalary}</td>
			<td><input type="button" id="remove-button" value="remove"> </td>
		</tr>
		
	`);
	}
	$("#remove-button").on("click", removeEmployee);
	// $(".table-employee").on("click", addToTable);
}

function removeEmployee() {
	//$(".table-employee").empty();
	console.log("test");
	// var $item = $(this).closest("tr")   // Finds the closest row <tr> 
	// .find(".nr")     // Gets a descendent with class="nr"
	// .text();  

	// console.log($item);

}
// function to append employee on to DOM table
// function appendToTable() {
// 	console.log("working!");
// 	$(".update-employee-row").append(`
// 	<tbody>
// 	<tr>
// 		<td class="firstName">${employee.fName}</td>,
// 		<td class="LastName">${employee.lName}</td>,
// 		<td class="employeeId">${employee.employeeId}</td>,
// 		<td class="employeeTitle">${employee.employeeTitle}</td>,
// 		<td class="annualSalary">${employee.employeeAS}</td>,
// 	</tr>
// 	</tbody>
// 	`);
// }