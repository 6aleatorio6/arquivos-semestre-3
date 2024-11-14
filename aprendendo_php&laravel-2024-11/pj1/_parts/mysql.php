<?php


try {
    $db = new mysqli("127.0.0.1", "db_php", "db_php", "db_php", 3306);
} catch (\Throwable $th) {
    die("erro trágico no DB. O erro seria: " . $th->getMessage());
}

$db->real_query("
    create table if not exists user (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE
    );
");
