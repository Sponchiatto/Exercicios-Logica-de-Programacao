<?php
function ordenarArrayAlfabeticamente(array $strings): array
{
    sort($strings);
    return $strings;
}

// Exemplo de uso
$nomes = ["Carlos", "Ana", "Beatriz", "Eduardo"];
$nomesOrdenados = ordenarArrayAlfabeticamente($nomes);

print_r($nomesOrdenados);
