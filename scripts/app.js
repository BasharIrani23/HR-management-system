function Employee(employee_id, full_name, department, level, image, salary) {
  this.employee_id = employee_id;
  this.full_name = full_name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = salary;
}

const employee_1 = new Employee(
  1000,
  "	Ghazi Samer",
  department.administration,
  levels.senior.title,
  "assets/Gazi.png"
);
const employee_2 = new Employee(
  1001,
  "	Lana Ali",
  department.finance,
  levels.senior.title,
  "assets/lana.png"
);
const employee_3 = new Employee(
  1002,
  "	Tamara Ayoub",
  department.marketing,
  levels.senior.title,
  "assets/tamara.png"
);
const employee_4 = new Employee(
  1003,
  "	Safi Walid",
  department.administration,
  levels.mid_senior.title,
  "assets/safi.png"
);
const employee_5 = new Employee(
  1004,
  "	Omar Zaid",
  department.development,
  levels.senior.title,
  "assets/omar.png"
);
const employee_6 = new Employee(
  1005,
  "	Rana Saleh",
  department.development,
  levels.junior.title,
  "assets/rana.png"
);
const employee_7 = new Employee(
  1006,
  "	Hadi Ahmad",
  department.finance,
  levels.mid_senior.title,
  "assets/hadi.jpg"
);

Employee.prototype.calcSalary = function () {
  switch (this.level) {
    case "Junior":
      this.salary = randomIntFromInterval(
        levels.junior.salary.min,
        levels.junior.salary.max
      );
      break;
    case "Mid-Senior":
      this.salary = randomIntFromInterval(
        levels.mid_senior.salary.min,
        levels.mid_senior.salary.max
      );
      break;
    case "Senior":
      this.salary = randomIntFromInterval(
        levels.senior.salary.min,
        levels.senior.salary.max
      );
      break;
  }

  const calcTaxes = this.salary * (TAX / 100);
  // salary after tax
  this.salary = this.salary - calcTaxes;
  console.log("salary after", this.salary);
};

Employee.prototype.renderInHomePage = function () {
  const mainDiv = document.getElementById("renderDiv");
  //const defaultImage = "assets/1.jpg";

  const card = document.createElement("div");
  card.className = "card";

  const name = document.createElement("h2");
  name.innerText = this.employee_id + " - " + this.full_name;

  const department = document.createElement("h3");
  department.innerText = this.department + " - " + this.level;

  const img = document.createElement("img");
  img.setAttribute("src", this.image);

  const salary = document.createElement("h4");
  salary.innerText = ` Salary: ${this.salary}`;

  card.append(name, department, img, salary);
  mainDiv.append(card);
};

// Load saved employees on first load
if (savedEmployees.length) {
  savedEmployees.forEach((employee, index) => {
    employee = new Employee(
      employee.employee_id,
      employee.full_name,
      employee.department,
      employee.level,
      employee.image,
      employee.salary
    );
    employee.renderInHomePage();
  });
}

const empArr = [
  employee_1,
  employee_2,
  employee_3,
  employee_4,
  employee_5,
  employee_6,
  employee_7,
];
const allUsersHaveBeenAdded = localStorage.getItem("ALL_USER_ADDED");

if (!allUsersHaveBeenAdded) {
  for (let i = 0; i < empArr.length; i++) {
    empArr[i].calcSalary();
    empArr[i].renderInHomePage();

    const allEmployee = localStorage.getItem(LOCAL_STORAGE_EMPLOYEES_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPLOYEES_KEY))
      : [];
    allEmployee.push(empArr[i]);

    localStorage.setItem(
      LOCAL_STORAGE_EMPLOYEES_KEY,
      JSON.stringify(allEmployee)
    );

    savedEmployees.push(empArr[i]);

    if (empArr.length === i + 1) {
      localStorage.setItem("ALL_USER_ADDED", "true");
    }
  }
}

const form = document.getElementById("addform");
// Creat new employee from form

function uniqID() {
  return Math.floor(1000 + Math.random() * 9000);
}
console.log(savedEmployees);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fullname = e.target.fullname.value;
  let image = e.target.img_url.value;
  const dept = department[e.target.department.value];
  const level = e.target.level.value;

  let newEmploee = new Employee(uniqID(), fullname, dept, level, image);

  newEmploee.calcSalary();
  newEmploee.renderInHomePage();

  savedEmployees.push(newEmploee);
  localStorage.setItem(
    LOCAL_STORAGE_EMPLOYEES_KEY,
    JSON.stringify([...savedEmployees])
  );
});
