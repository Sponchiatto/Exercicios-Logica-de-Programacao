<?php

class ContaBancaria
{
    protected float $saldo;

    public function __construct(float $saldoInicial = 0)
    {
        $this->saldo = $saldoInicial;
    }

    public function depositar(float $valor): void
    {
        if ($valor > 0) {
            $this->saldo += $valor;
            echo "Depósito de R$ $valor realizado. Saldo atual: R$ $this->saldo\n";
        } else {
            echo "O valor do depósito deve ser positivo.\n";
        }
    }

    public function sacar(float $valor): void
    {
        if ($valor > 0 && $valor <= $this->saldo) {
            $this->saldo -= $valor;
            echo "Saque de R$ $valor realizado. Saldo atual: R$ $this->saldo\n";
        } else {
            echo "Saldo insuficiente ou valor inválido.\n";
        }
    }

    public function consultarSaldo(): void
    {
        echo "Saldo atual: R$ $this->saldo\n";
    }
}

class ContaCorrente extends ContaBancaria
{
    private const TAXA_SAQUE = 2.50;
    private const TARIFA_MENSAL = 15.00;

    #[\Override]
    public function sacar(float $valor): void
    {
        $valorTotal = $valor + self::TAXA_SAQUE;
        if ($valorTotal > 0 && $valorTotal <= $this->saldo) {
            $this->saldo -= $valorTotal;
            echo "Saque de R$ $valor realizado com taxa de R$ " . self::TAXA_SAQUE . ". Saldo atual: R$ $this->saldo\n";
        } else {
            echo "Saldo insuficiente ou valor inválido.\n";
        }
    }

    public function cobrarTarifaMensal(): void
    {
        if ($this->saldo >= self::TARIFA_MENSAL) {
            $this->saldo -= self::TARIFA_MENSAL;
            echo "Tarifa mensal de R$ " . self::TARIFA_MENSAL . " cobrada. Saldo atual: R$ $this->saldo\n";
        } else {
            echo "Saldo insuficiente para cobrança da tarifa mensal.\n";
        }
    }
}

// Exemplo de uso
$conta = new ContaCorrente(100);
$conta->consultarSaldo();
$conta->depositar(50);
$conta->sacar(30);
$conta->cobrarTarifaMensal();
$conta->consultarSaldo();
