
<?php


class UserRepo
{
    public Mysqli $db;

    function __construct()
    {
        $this->db = new mysqli("127.0.0.1", "db_php", "db_php", "db_php", 3306);

        $this->db->real_query("
            create table if not exists user (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                password VARCHAR(60) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE
            );
        ");
    }


    public  function getAll()
    {
        $result = $this->db->query("select * from user");

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function get(string $email)
    {
        $result = $this->db->query("select name, id, password from user where email = '" . $this->db->escape_string($email) . "'");

        return $result->fetch_assoc();
    }

    public function create(string $name, string $password, string $email)
    {
        $name = $this->db->escape_string($name);
        $email = $this->db->escape_string($email);
        $password = password_hash($this->db->escape_string($password), PASSWORD_BCRYPT);

        return  $this->db->execute_query("INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')");
    }

    public function put() {}
}

try {
    $userRepo  = new UserRepo();
} catch (\Throwable $th) {
    die("erro trágico no DB. O erro seria: " . $th->getMessage());
}
