// Dependencies
const connection = require('./utils/config');
const inquirer = require('inquirer');
const chalk = require('chalk');
const view = require('./utils/view');
const add = require('./utils/add');
const remove = require('./utils/remove');
const update = require('./utils/update');
const figlet = require('figlet');

// Database Connect and Starter Title
connection.connect((error) => {
    if (error) throw error;
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log(``);
    console.log(chalk.cyan(figlet.textSync('Employee Database')));
    console.log(``);
    console.log(`                                `+ chalk.cyan.bold('Created By: Rachel McGrath'));
    console.log(``);
    console.log(chalk.yellow.bold(`====================================================================================`));
    promptUser();
  });
  
  // Prompt User for Choices
  const promptUser = () => {
    inquirer.prompt([
        {
          name: 'choices',
          type: 'list',
          message: 'Please select an option:',
          choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'View All Employees By Department',
            'View Department Budgets',
            'Update Employee Role',
            'Update Employee Manager',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Remove Employee',
            'Remove Role',
            'Remove Department',
            'Exit'
            ]
        }
      ])
      .then((answers) => {
        const {choices} = answers;
  
          if (choices === 'View All Employees') {
              viewAllEmployees();
          }
  
          if (choices === 'View All Departments') {
            viewAllDepartments();
        }
  
          if (choices === 'View All Employees By Department') {
              viewEmployeesByDepartment();
          }
  
          if (choices === 'Add Employee') {
              addEmployee();
          }
  
          if (choices === 'Remove Employee') {
              removeEmployee();
          }
  
          if (choices === 'Update Employee Role') {
              updateEmployeeRole();
          }
  
          if (choices === 'Update Employee Manager') {
              updateEmployeeManager();
          }
  
          if (choices === 'View All Roles') {
              viewAllRoles();
          }
  
          if (choices === 'Add Role') {
              addRole();
          }
  
          if (choices === 'Remove Role') {
              removeRole();
          }
  
          if (choices === 'Add Department') {
              addDepartment();
          }
  
          if (choices === 'View Department Budgets') {
              viewDepartmentBudget();
          }
  
          if (choices === 'Remove Department') {
              removeDepartment();
          }
  
          if (choices === 'Exit') {
              connection.end();
          }
    });
  };
  