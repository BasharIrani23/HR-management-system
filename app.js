function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const TAX = 7.5;
const levels = {
  junior: {
    title: "Junior",
    salary: {
      min: 500,
      max: 1000,
    },
  },
  mid_senior: {
    title: "Mid-Senior",
    salary: {
      min: 1000,
      max: 1500,
    },
  },
  senior: {
    title: "Senior",
    salary: {
      min: 1500,
      max: 2000,
    },
  },
};
const department = {
  administration: "Administration",
  marketing: "Marketing",
  development: "Development",
  finance: "Finance",
};

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
  levels.senior.title
);
const employee_2 = new Employee(
  1001,
  "	Lana Ali",
  department.finance,
  levels.senior.title
);
const employee_3 = new Employee(
  1002,
  "	Tamara Ayoub",
  department.marketing,
  levels.senior.title
);
const employee_4 = new Employee(
  1003,
  "	Safi Walid",
  department.administration,
  levels.mid_senior.title
);
const employee_5 = new Employee(
  1004,
  "	Omar Zaid",
  department.development,
  levels.senior.title
);
const employee_6 = new Employee(
  1005,
  "	Rana Saleh",
  department.development,
  levels.junior.title
);
const employee_7 = new Employee(
  1006,
  "	Hadi Ahmad",
  department.finance,
  levels.mid_senior.title
);

Employee.prototype.calcSalary = function () {
  console.log("level", this.level);
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
  console.log("salary before", this.salary);
  const calcTaxes = this.salary * (TAX / 100);
  // salary after tax
  this.salary = this.salary - calcTaxes;
  console.log("salary after", this.salary);
};

Employee.prototype.renderInHomePage = function () {
  const mainDiv = document.getElementById("renderDiv");

  const card = document.createElement("div");
  card.className="card";


  const name = document.createElement("h2");
  name.innerText = this.full_name;

  const salary = document.createElement("h4");
  salary.innerText =` Salary: ${this.salary}`;

  card.append(name,salary);
  mainDiv.append(card);
};


employee_1.calcSalary();
employee_1.renderInHomePage();

employee_2.calcSalary();
employee_2.renderInHomePage();

employee_3.calcSalary();
employee_3.renderInHomePage();

employee_4.calcSalary();
employee_4.renderInHomePage();

employee_5.calcSalary();
employee_5.renderInHomePage();

employee_6.calcSalary();
employee_6.renderInHomePage();

employee_7.calcSalary();
employee_7.renderInHomePage();

const form=document.getElementById("addform");
// Creat new employee from form

function uniqID(){
  return Math.floor(1000 + Math.random() * 9000);
  }
=======

employee_1.calcSalary();
employee_1.renderInHomePage();

employee_2.calcSalary();
employee_2.renderInHomePage();

employee_3.calcSalary();
employee_3.renderInHomePage();

employee_4.calcSalary();
employee_4.renderInHomePage();

employee_5.calcSalary();
employee_5.renderInHomePage();

employee_6.calcSalary();
employee_6.renderInHomePage();

employee_7.calcSalary();
employee_7.renderInHomePage();



form.addEventListener('submit', (e) => {
  e.preventDefault()


  let fullname = e.target.fullname.value
  let image = e.target.img_url.value
  const dept = department[e.target.department.value]
  const level = e.target.level.value
  
  let newEmploee = new Employee(uniqID(), fullname, dept, level, image)
  
  newEmploee.calcSalary()
  console.log(newEmploee);
  newEmploee.renderInHomePage()
  
})
=======

