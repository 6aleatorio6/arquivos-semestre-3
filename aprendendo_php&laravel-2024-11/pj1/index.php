<?php include_once('_parts/mysql.php') ?>
<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>home php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="container ">
    <?php include('_parts/nav.php') ?>

    <h1>hello, criatura estranha!</h1>
    <h6>parece que você não está logado</h6>


    <div class="mt-5 ">
        <h4>pessoas cadastradas</h4>

        <table class="table border-1 border">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $result = $db->query("select * from user");

                foreach ($result->fetch_all(MYSQLI_ASSOC) as $value) {
                ?>
                    <tr>
                        <th><?= $value["id"] ?></th>
                        <td><?= $value["name"] ?></td>
                        <td><?= $value["email"] ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>