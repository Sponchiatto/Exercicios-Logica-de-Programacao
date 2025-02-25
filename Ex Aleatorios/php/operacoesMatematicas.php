<?php
function calcular($num1, $num2, $operacao)
{
    switch ($operacao) {
        case '+':
            return $num1 + $num2;
        case '-':
            return $num1 - $num2;
        case '*':
            return $num1 * $num2;
        case '/':
            return $num2 != 0 ? $num1 / $num2 : 'Erro: Divisão por zero';
        default:
            return 'Erro: Operação inválida';
    }
}

// Exemplo de uso
echo calcular(10, 5, '+'); // Saída: 15
