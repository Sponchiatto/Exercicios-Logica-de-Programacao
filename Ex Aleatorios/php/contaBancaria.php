<?php
$contaBancaria = [
    "titular" => "João Silva",
    "saldo" => 1500.50
];

// Exibir informações da conta bancária
echo "Titular: " . $contaBancaria['titular'] . "\n";
echo "Saldo: R$ " . number_format($contaBancaria['saldo'], 2, ',', '.') . "\n";
?>
