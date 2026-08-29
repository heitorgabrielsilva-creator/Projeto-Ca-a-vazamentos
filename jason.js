document.getElementById('leak-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Coleta os dados digitados
  const dadosCliente = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    endereco: document.getElementById('endereco').value,
    problema: document.getElementById('problema').value,
    dataEnvio: new Date().toLocaleString('pt-BR')
  };

  // Converte o objeto em uma string no formato JSON
  const jsonDados = JSON.stringify(dadosCliente, null, 2);
  console.log('Dados do chamado em JSON:', jsonDados);

  // Exibe a mensagem de confirmação
  const divMensagem = document.getElementById('mensagem-sucesso');
  divMensagem.textContent = `Obrigado, ${dadosCliente.nome}! Seu chamado foi registrado com sucesso.`;
  divMensagem.classList.remove('hidden');

  // Limpa os campos do formulário
  document.getElementById('leak-form').reset();
});