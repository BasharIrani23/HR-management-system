const totals = {}

let totalSalary = 0
savedEmployees.forEach((employee, index) => {
    totalSalary = employee.salary + totalSalary
    if(!totals[employee.department]){
        totals[employee.department] = {
            totalEmployees: 0,
            totalSalaryOfDepartment: 0,
            averageSalary: 0,
        }
    }
    totals[employee.department].totalEmployees++
    totals[employee.department].totalSalaryOfDepartment = totals[employee.department].totalSalaryOfDepartment + employee.salary

    totals[employee.department].averageSalary = totals[employee.department].totalSalaryOfDepartment / totals[employee.department].totalEmployees
});

const accoutingTable = document.querySelector('#accounting tfoot')
let htmlResult = "";

Object.keys(totals).forEach((department, index)=>{
    totals[department].totalSalary = totalSalary

     htmlResult += `
        <tr>
            <td>${department}</td>
            <td>${totals[department].totalEmployees}</td>
            <td>${totals[department].totalSalary}</td>
            <td>${totals[department].averageSalary}</td>
        </tr>
    `
})

accoutingTable.innerHTML = htmlResult


console.log(totals);


