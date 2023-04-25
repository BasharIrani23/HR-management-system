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

Object.keys(totals).forEach((department, index)=>{
    totals[department].totalSalary = totalSalary
})


console.log(totals);


