const totals = {
  totalEmployees: 0,
  totalSalary: 0,
  averageSalary: 0,
};
const totalsPerDepartement = {};

savedEmployees.forEach((employee, index) => {
  if (!totalsPerDepartement[employee.department]) {
    totalsPerDepartement[employee.department] = {
      totalEmployees: 0,
      totalSalaryOfDepartment: 0,
      averageSalary: 0,
    };
  }
  totalsPerDepartement[employee.department].totalEmployees++;
  totalsPerDepartement[employee.department].totalSalaryOfDepartment =
    totalsPerDepartement[employee.department].totalSalaryOfDepartment +
    employee.salary;

  totalsPerDepartement[employee.department].averageSalary =
    totalsPerDepartement[employee.department].totalSalaryOfDepartment /
    totalsPerDepartement[employee.department].totalEmployees;

  totals.totalEmployees++;
  totals.totalSalary = totals.totalSalary + employee.salary;
  totals.averageSalary =
    totals.totalSalary / Object.keys(totalsPerDepartement).length;
});

const accoutingTable = document.querySelector("#accounting tbody");
const accoutingTableFooter = document.querySelector("#accounting tfoot");

let htmlResult = "";

Object.keys(totalsPerDepartement).forEach((department, index) => {
  htmlResult += `
        <tr>
            <td>${department}</td>
            <td>${totalsPerDepartement[department].totalEmployees}</td>
            <td>${totalsPerDepartement[department].totalSalaryOfDepartment}</td>
            <td>${totalsPerDepartement[department].averageSalary}</td>
        </tr>
    `;
});

accoutingTable.innerHTML = htmlResult;
accoutingTableFooter.innerHTML = `
    <tr>
        <td></td>
        <td>${totals.totalEmployees}</td>
        <td>${totals.totalSalary}</td>
        <td>${totals.averageSalary}</td>
    </tr>
`;
