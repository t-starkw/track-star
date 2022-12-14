const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Christopher0720!',
    database: 'empl_track_db' 
}, console.log('Connected to the employee database'));

db.connect((error) => {
    if (error) throw error;
    console.log('Welcome to the Employee Tracker Database');
    init()
});

// initialization of inquirer prompting session
const init = async () => {
    try {
        // tell response to wait for prompt session initialization
        let response = await inquirer.prompt({
            name : "action",
            type : "list",
            message : "Which action would you like to perform?",
            choices : [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                new inquirer.Separator(),
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                new inquirer.Separator(),
            ]
        });
// declare case expressions for selected action(response)
        switch (response.action) {
            case 'View all Departments':
                viewDept();
                break;
            case 'View all Roles':
                // viewRole();
                break;
            case 'View all Employees':
                // viewEmpl()
                break;
            case 'Add Department':
                // addDept();
                break;
            case 'Add Role':
                // addRole();
                break;
            case 'Add Employee':
                // function call to add an employee to table
                break;
            case 'Update Employee Role':
                // function call to query for employee and change role
                break;
            
            default:
                console.log('I have no clue what you want from me');

        };
 
    } catch (err) {
        console.log(err);
        init();
    };
};
// VIEW funcs
const viewDept = () => {
    console.log("Department Database");
    db.query(
        `SELECT * FROM Departments`,
        (err, results) => {
            console.log(results);
        }
    )
};

