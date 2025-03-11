<?php

enum TipoConta: string
{
    case CORRENTE = 'Corrente';
    case POUPANCA = 'Poupança';
    case UNIVERSITARIA = 'Universitária';
    case INVESTIMENTO = 'Investimento';

    public function possuiTaxas(): bool
    {
        return match ($this) {
            self::CORRENTE, self::INVESTIMENTO => true,
            self::POUPANCA, self::UNIVERSITARIA => false,
        };
    }
}

class ContaBancaria
{
    private float $saldo;
    private string $titular;
    private TipoConta $tipo;

    public function __construct(string $titular, TipoConta $tipo, float $saldoInicial = 0.0)
    {
        $this->titular = $titular;
        $this->tipo = $tipo;
        $this->saldo = $saldoInicial;
    }

    public function getSaldo(): float
    {
        return $this->saldo;
    }

    public function getTitular(): string
    {
        return $this->titular;
    }

    public function getTipo(): TipoConta
    {
        return $this->tipo;
    }

    public function depositar(float $valor): void
    {
        if ($valor > 0) {
            $this->saldo += $valor;
        }
    }

    public function sacar(float $valor): bool
    {
        if ($valor > 0 && $this->saldo >= $valor) {
            $this->saldo -= $valor;
            return true;
        }
        return false;
    }
}

// Exemplo de uso:
$conta = new ContaBancaria("João Silva", TipoConta::CORRENTE, 1000.0);

echo "Titular: " . $conta->getTitular() . "\n";
echo "Tipo: " . $conta->getTipo()->value . "\n";
echo "Saldo: R$ " . $conta->getSaldo() . "\n";
echo "Possui taxas? " . ($conta->getTipo()->possuiTaxas() ? "Sim" : "Não") . "\n";
