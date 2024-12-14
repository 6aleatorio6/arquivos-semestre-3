<?php
require_once('_parts/mysql.php');



function trylogin(string $email, string $password, UserRepo $userRepo)
{
    $user = $userRepo->get($email);
    $isPasswordValid = password_verify($password, $user['password']);

    if (!$user && !$isPasswordValid) throw new Exception("senha ou email inválido");

    if (session_status() != PHP_SESSION_ACTIVE) session_start();

    $_SESSION['user'] = $user;

    return $user;
}


function getUserSession(): array|null
{
    if (session_status() != PHP_SESSION_ACTIVE) session_start();

    return isset($_SESSION['user']) ? $_SESSION['user']  : null;
}

function logout()
{
    if (session_status() != PHP_SESSION_ACTIVE) session_start();


    session_destroy();
}
