<!doctype html>
<html lang="pt-br">

<?php include_once('_parts/mysql.php') ?>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>login php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="container vh-100">
    <?php require_once('_parts/nav.php') ?>

    <?php
    if ($_POST['email']) {
        try {
            $result = $userRepo->create($_POST["name"], $_POST["password"], $_POST["email"]);

            echo '<div class="alert alert-success" role="alert">usuario cadastrado!</div>';
        } catch (\Throwable $th) {
            echo '<div class="alert alert-danger" role="alert">erro ao cadastrar! ' . $th->getMessage()  . '</div>';
        }
    }
    ?>

    <form class="mt-5" method="post">
        <h3>cadastre-se</h3>
        <div class="mb-3">
            <label for="username" class="form-label">username</label>
            <input type="name" class="form-control" name="name" id="username" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" name="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>