<?php
$json = '{"nome":"Vinicius","anoNascimento":1997,"profissao":"Dev"}';

// Converte JSON para objeto PHP
$dados = json_decode($json);

// Exibe o objeto
var_dump($dados);

// Acessando propriedades do objeto
echo "Nome: " . $dados->nome . "\n";
echo "Ano de Nascimento: " . $dados->anoNascimento . "\n";
echo "Profissão: " . $dados->profissao . "\n";
