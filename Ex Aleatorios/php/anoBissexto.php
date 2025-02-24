<?php
$ano = 2024;

if (($ano % 4 == 0 && $ano % 100 != 0) || ($ano % 400 == 0)) {
    echo "$ano é um ano bissexto.";
} else {
    echo "$ano não é um ano bissexto.";
}
?>
