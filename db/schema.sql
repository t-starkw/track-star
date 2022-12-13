DROP DATABASE IF EXISTS empl_track_db;
CREATE DATABASE empl_track_db;

USE empl_track_db;

CREATE TABLE Departments (
  dept_id INTEGER AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (dept_id)
);

CREATE TABLE Roles (
  role_id INTEGER AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL(10,2) NULL,
  dept_id INTEGER,
  PRIMARY KEY (role_id),
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

CREATE TABLE Employees (
  emp_id INTEGER AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER NULL,
  PRIMARY KEY (emp_id),
  FOREIGN KEY (role_id) REFERENCES Roles(role_id),
  FOREIGN KEY (manager_id) REFERENCES Employees(emp_id)
);
