function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const TAX = 7.5;
const levels = {
  junior: {
      title: 'Junior',
      salary: {
          min: 500,
          max: 1000,
      }
  },
  mid_senior: {
      title: 'Mid-Senior',
      salary:{
          min: 1000,
          max: 1500,
      }
  },
  senior : {
      title : 'Senior',
      salary:{
          min: 1500,
          max: 2000,
      }
  },
}

function Employee(
  employee_id,
  full_name,
  department,
  administration,
  marketing,
  development,
  finance,
  level,
  image,
  salary,
){
  this.employee_id = employee_id;
  this.full_name =full_name;
  this.department =department;
  this.administration =administration;
  this.marketing =marketing;
  this.development =development;
  this.finance =finance;
  this.level =level;
  this.image =image;
  this.salary =salary;
}

const employee_1 = new Employee(1000, '	Ghazi Samer',  'Administration', '' , '' , '' , ' ' , levels.senior.title)
const employee_2 = new Employee(1001, '	Lana Ali',  'Finance',  '' , '' , '' , ' ' ,levels.senior.title,)
const employee_3 = new Employee(1002, '	Tamara Ayoub',  'Marketing', '' , '' , '' , ' ' , levels.senior.title,)
const employee_4 = new Employee(1003, '	Safi Walid',  'Administration', '' , '' , '' , ' ' , levels.mid_senior.title,)
const employee_5 = new Employee(1004, '	Omar Zaid',  'Development', '' , '' , '' , ' ' , levels.senior.title,)
const employee_6 = new Employee(1005, '	Rana Saleh',  'Development', '' , '' , '' , ' ' , levels.junior.title,)
const employee_7 = new Employee(1006, '	Hadi Ahmad',  'Finance',  '' , '' , '' , ' ' ,levels.mid_senior.title,)

Employee.prototype.calcSalary = function (){
  employee_1.salary = randomIntFromInterval(levels.junior.salary.min, levels.junior.salary.max)
  console.log('salary before', this.salary)
  const calcTaxes =  this.salary * (TAX / 100)
  // salary after tax
  this.salary = this.salary - calcTaxes
  console.log('salary after', this.salary)
}

Employee.prototype.renderInHomePage = function(){
  const employeesTable = document.querySelector('.employees_table');
  const tr_row = document.createElement('tr')
  employeesTable.querySelector('tbody').append(tr_row)
  tr_column_1 = document.createElement('td')
  tr_column_2 = document.createElement('td')
  tr_column_3 = document.createElement('td')
  tr_column_4 = document.createElement('td')

  tr_row.append(tr_column_1, tr_column_2, tr_column_3, tr_column_4)

  tr_column_1.innerText = this.employee_id
  tr_column_2.innerText = this.full_name
  tr_column_3.innerText = this.department
  tr_column_4.innerText = this.level
}


employee_1.calcSalary()
employee_1.renderInHomePage()

employee_2.calcSalary()
employee_2.renderInHomePage()

employee_3.calcSalary()
employee_3.renderInHomePage()

employee_4.calcSalary()
employee_4.renderInHomePage()

employee_5.calcSalary()
employee_5.renderInHomePage()

employee_6.calcSalary()
employee_6.renderInHomePage()

employee_7.calcSalary()
employee_7.renderInHomePage()


console.log(employee_1)