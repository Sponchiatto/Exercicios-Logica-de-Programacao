<?php
$arquivo = __DIR__.'filme.json';

// Verifica se o arquivo existe
if (file_exists($arquivo)) {
    // Lê o conteúdo do arquivo
    $conteudo = file_get_contents($arquivo);

    // Decodifica o JSON
    $dados = json_decode($conteudo, true);

    // Verifica se a decodificação foi bem-sucedida
    if ($dados) {
        echo "<h2>Informações do Filme</h2>";
        echo "<ul>";
        foreach ($dados as $chave => $valor) {
            echo "<li><strong>$chave:</strong> $valor</li>";
        }
        echo "</ul>";
    } else {
        echo "Erro ao processar o arquivo JSON.";
    }
} else {
    echo "Arquivo não encontrado.";
}
