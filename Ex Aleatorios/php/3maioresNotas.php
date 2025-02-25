<?php
$notas = [8.5, 7.2, 9.8, 6.4, 5.9, 10, 8.9];

// Ordena o array em ordem decrescente
rsort($notas);

// Exibe as 3 maiores notas
$top3 = array_slice($notas, 0, 3);
print_r($top3);
?>