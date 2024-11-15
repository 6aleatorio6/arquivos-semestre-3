<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.php">PAIA</a>



        <?php
        require_once('_parts/auth.php');


        $user = getUserSession();

        if ($user) {

        ?>


            <ul class="nav justify-content-end">
                <li class="nav-item  ">
                    <h1 class="nav-link">Olá <?= $user['name'] ?>, tenha um bom dia</h1>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/logout.php">SAIR</a>

                </li>
            </ul>

        <?php
        } else {
        ?>
            <ul class="nav justify-content-end">
                <li class="nav-item  ">
                    <a class="nav-link" href="/login.php">LOGIN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/cadastro.php">CADASTRO</a>
                </li>
            </ul>
        <?php
        }
        ?>


    </div>
</nav>