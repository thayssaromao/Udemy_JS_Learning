fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const thNome = document.createElement('th');
  thNome.innerHTML = 'Nome';
  headerRow.appendChild(thNome);

  const thIdade = document.createElement('th');
  thIdade.innerHTML = 'Idade';
  headerRow.appendChild(thIdade);

  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
