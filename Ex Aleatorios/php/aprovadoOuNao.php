<?php
$notas = [7, 5, 9, 4, 6]; // Exemplo de notas

foreach ($notas as $nota) {
    if ($nota > 6) {
        echo "Nota: $nota - Aprovado\n";
    } else {
        echo "Nota: $nota - Reprovado\n";
    }
}
?>
