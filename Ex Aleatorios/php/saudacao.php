<?php
function saudacao($horas) {
    if ($horas >= 6 && $horas < 12) {
        return 'Bom dia!';
    } elseif ($horas >= 12 && $horas < 18) {
        return 'Boa tarde!';
    } elseif ($horas >= 18 && $horas < 24) {
        return 'Boa noite!';
    } else {
        return 'Hora inválida!';
    }
}

// Exemplo de uso:
$horas = 15; // Exemplo de hora
echo saudacao($horas);
?>
