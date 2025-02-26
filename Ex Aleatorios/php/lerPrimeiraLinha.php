<?php
$caminhoArquivo = __DIR__ . '/teste.txt';

// Abre o arquivo para leitura
$arquivo = fopen($caminhoArquivo, "r");

if ($arquivo) {
    // Lê a primeira linha
    $linha = fgets($arquivo);
    echo "Primeira linha: " . $linha;

    // Fecha o arquivo
    fclose($arquivo);
} else {
    echo "Erro ao abrir o arquivo.";
}
