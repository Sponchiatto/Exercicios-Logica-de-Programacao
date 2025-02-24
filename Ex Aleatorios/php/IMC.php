<?php
function calcularIMC($peso, $altura) {
    $imc = $peso / ($altura * $altura);
    $classificacao = '';

    if ($imc < 18.5) {
        $classificacao = 'Abaixo do peso';
    } elseif ($imc >= 18.5 && $imc < 24.9) {
        $classificacao = 'Peso normal';
    } elseif ($imc >= 25 && $imc < 29.9) {
        $classificacao = 'Sobrepeso';
    } elseif ($imc >= 30 && $imc < 34.9) {
        $classificacao = 'Obesidade grau 1';
    } elseif ($imc >= 35 && $imc < 39.9) {
        $classificacao = 'Obesidade grau 2';
    } else {
        $classificacao = 'Obesidade grau 3';
    }

    return "IMC: " . number_format($imc, 2) . " - Classificação: " . $classificacao;
}

// Exemplo de uso:
$peso = 75; // kg
$altura = 1.75; // metros
echo calcularIMC($peso, $altura);
?>
