<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>mundo paiado</h1>

    <?php
    $paia = $_POST['teste'];
    $paia = (!is_numeric($paia)) ? $paia : intval($paia);

    if (is_string($paia)) {
    ?>
        <h1> <?= $paia ?> </h1>
    <?php } else if (is_int($paia)) { ?>
        <h1>opa, isso é um numero: <?= $paia ?> </h1>
    <?php } else { ?>
        <h1>vc cometeu um erro nefasto! vc errou o tipo da variavel</h1>
    <?php } ?>

    <form method="post">
        <input name="teste" type="text" value="" placeholder="paia">
        <button type="submit">enter</button>
    </form>

    <script>
        document.addEventListener("DOMContentLoaded", () => document.querySelector('input').focus())
    </script>
</body>

</html>