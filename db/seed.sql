INSERT INTO departments(name)
VALUES("engineering"), ('marketing'), ("accounting");

INSERT INTO roles(title, salary, dept_id)
VALUES("ENGINEER", 123456, 1), ("SOCIAL MEDIA INTERN", 78910, 2), ("ACCOUNTANT I", 147258, 3);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES("Mike", "Wazowski", 1, NULL), ("Justin", "Bieber", 2, 1), ("Pink", "Panther", 3, 2);