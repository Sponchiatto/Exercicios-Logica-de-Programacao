function sistemaUsuarioSenha() {
  // Cadastro do usuário
  console.log("=== CADASTRO DE USUÁRIO ===");
  const usuarioCadastrado = prompt("Digite o nome do usuário:");
  const senhaCadastrada = prompt("Digite a senha:");

  // Login
  console.log("=== LOGIN ===");
  const usuarioLogin = prompt("Digite o nome do usuário:");
  const senhaLogin = prompt("Digite a senha:");

  // Verificação de credenciais
  if (usuarioLogin === usuarioCadastrado && senhaLogin === senhaCadastrada) {
    console.log("BEM-VINDO À ÁREA RESTRITA.");
  } else {
    if (usuarioLogin !== usuarioCadastrado && senhaLogin === senhaCadastrada) {
      console.log("USUÁRIO INCORRETO.");
    }
    if (usuarioLogin === usuarioCadastrado && senhaLogin !== senhaCadastrada) {
      console.log("SENHA INCORRETA.");
    }
    if (usuarioLogin !== usuarioCadastrado && senhaLogin !== senhaCadastrada) {
      console.log("DADOS INCORRETOS.");
    }
  }
}

// Executar o programa
sistemaUsuarioSenha();
