DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE job_roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(100) NOT NULL
    department VARCHAR(100) NOT NULL
    salary INT NOT NULL
);

CREATE TABLE employee_data (
    employee_id INT NOT NULL,
    fist_name VARCHAR(100) NOT NULL
    last_name VARCHAR(100) NOT NULL
    job_title VARCHAR(100) NOT NULL
    department VARCHAR(100) NOT NULL
    salaries INT NOT NULL
    manager_to_report VARCHAR(100) NOT NULL
)
