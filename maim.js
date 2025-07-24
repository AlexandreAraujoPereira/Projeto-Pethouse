function calcularDias() {
    const data1 = new Date(document.getElementById('check-in').value);
    const data2 = new Date(document.getElementById('check-out').value);

    const DiferencaEmMilissegundos = Math.abs(data1 - data2);
    const dias = Math.ceil(DiferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    alert('Você alugou por ' + dias + ' dia(s).');
  }
  

  function cadastro() {
    
    alert('Cadastro Realizado com sucesso!');
  }
  function login() {
    
    alert('Bem vindo!');
  }
  function contato() {
     alert('Entraremos em contato com você em menos de 24 horas para a confirmação do agendamento!');
  }
  