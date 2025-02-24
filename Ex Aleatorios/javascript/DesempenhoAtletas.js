function sistemaDeAtletas() {
  // Solicitar tempo do Atleta A
  const tA = parseInt(
    prompt(
      "Informe o tempo (em minutos) que o Atleta A leva para dar uma volta:"
    )
  );

  // Calcular tempos dos Atletas B e C
  const tB = Math.floor((tA * 75) / 100);
  const tC = Math.floor((tA * 50) / 100);

  // Inicializar variáveis
  let encontrado = false;
  let t = 0;

  // Buscar o tempo em que os três atletas passam simultaneamente pela linha de chegada
  while (t <= 120 && !encontrado) {
    t++;
    if (t % tA === 0 && t % tB === 0 && t % tC === 0) {
      encontrado = true;
    }
  }

  // Resultado
  if (encontrado) {
    alert(
      "Os três atletas passarão simultaneamente pela linha após " +
        t +
        " minutos."
    );
  } else {
    alert("O evento não ocorreu dentro de 2 horas (120 minutos).");
  }
}

// Executar a função
sistemaDeAtletas();
