const LOCAL_STORAGE_EMPLOYEES_KEY = "employees";
const savedEmployees = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_EMPLOYEES_KEY) ?? "[]"
);

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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
