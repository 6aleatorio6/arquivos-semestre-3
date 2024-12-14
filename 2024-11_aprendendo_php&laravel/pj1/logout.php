<?php
require_once('_parts/auth.php');

logout();


header("Location: /index.php", true, 302);
die();
