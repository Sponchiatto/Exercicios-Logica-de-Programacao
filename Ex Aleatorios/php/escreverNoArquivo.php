<?php
$caminhoArquivo = __DIR__ . '/teste.txt';

// Abre o arquivo no modo de adição
$arquivo = fopen($caminhoArquivo, "a");

if ($arquivo) {
    fwrite($arquivo, "\nPHP é incrível!"); // Acrescenta no final
    fclose($arquivo); // Fecha o arquivo
    echo "Frase adicionada com sucesso!";
} else {
    echo "Erro ao abrir o arquivo.";
}
