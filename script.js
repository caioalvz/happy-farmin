function calcularHorarios(data, hora) {
  var horarioPlantio = new Date(data + 'T' + hora);
  horarioPlantio.setHours(horarioPlantio.getHours() - 10);

  var horarios = [];
  horarios.push(horarioPlantio);

  for (var i = 1; i < 75; i++) {
    horarioPlantio = new Date(horarioPlantio.getTime() + 10 * 60 * 60 * 1000);
    horarios.push(horarioPlantio);
  }

  return horarios;
}

function inserir() {
  var data = document.getElementById('data').value;
  var hora = document.getElementById('hora').value;

  var horarios = calcularHorarios(data, hora);

  var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

  var linha = tabela.insertRow(-1);
  var celulaData = linha.insertCell(0);
  var celulaHora = linha.insertCell(1);
  celulaData.innerHTML = horarios[0].toLocaleDateString();
  celulaHora.innerHTML = horarios[0].toLocaleTimeString();

  for (var i = 1; i < 75; i++) {
    linha = tabela.insertRow(-1);
    celulaData = linha.insertCell(0);
    celulaHora = linha.insertCell(1);
    celulaData.innerHTML = horarios[i].toLocaleDateString();
    celulaHora.innerHTML = horarios[i].toLocaleTimeString();
  }
}