CREATE TABLE user(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    update_time DATETIME COMMENT 'Update Time',
    username VARCHAR(255) UNIQUE NOT NULL COMMENT 'Username',
    password CHAR(60) NOT NULL COMMENT 'User Password',
    first_name VARCHAR(50) NOT NULL COMMENT 'User First Name',
    last_name VARCHAR(50) NOT NULL COMMENT 'User Last Name',
    email VARCHAR(100) UNIQUE NOT NULL COMMENT 'User First Name',
    role ENUM('Admin','SuperUser') DEFAULT 'SuperUser',
    age INT(11) DEFAULT 0
) DEFAULT CHARSET UTF8 COMMENT '';