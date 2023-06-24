// Array para armazenar os itens
let itens = [];

// Referências aos elementos HTML
const stockTable = document.getElementById('stock-record');
const inputItem = document.getElementById('item');
const inputBrand = document.getElementById('brand');
/*const inputModel = document.getElementById('model');
const inputSerialNumber = document.getElementById('serial-number');*/
const stockList = document.getElementById('stock-list');

// Função para adicionar um novo item
function addItem(event) {
    event.preventDefault();
    
    // Obtém os valores dos inputs
    const item = inputItem.value;
    const brand = inputBrand.value;
    /*const model = inputModel.value;
    const serialNumber = inputSerialNumber.value;*/

    // Cria um objeto com os dados do item
    const newItem = { item, brand/*, model, serialNumber*/ };

    // Adiciona o item ao estoque
    itens.push(newItem);

    // Limpa os inputs
    inputItem.value = '';
    inputBrand.value = '';
    /*inputModel.value = '';
    inputSerialNumber.value = '';*/

    // Atualiza a tabela
    displayStock();
  }

// Função para exibir o estoque na tabela
function displayStock() {
    // Limpa o corpo da tabela
    stockList.innerHTML = '';
    // Percorre o estoque e adiciona cada item à tabela
    itens.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.item}</td>
          <td>${item.brand}</td>
          <td>
            <button onclick="editItem(${index})">Editar</button>
            <button onclick="deleteItem(${index})">Excluir</button>
          </td>
        `;
        stockList.appendChild(row);
    });
}
/*
// Função para editar um item do estoque
function editItem(index) {
    // Obtém o item pelo índice no estoque
    const item = itens[index];

    // Preenche os inputs com os valores do item
    inputItem.value = item.item;
    /*inputBrand.value = item.brand;
    inputModel.value = item.model;
    inputSerialNumber.value = item.serialNumber;*/
/*
    // Remove o item do estoque
    itens.splice(index, 1);

    // Atualiza a tabela
    displayStock();
}

// Função para excluir um item do estoque
function deleteItem(index) {
    // Remove o item do estoque
    itens.splice(index, 1);

    // Atualiza a tabela
    displayStock();
}*/

// Event Listener para adicionar o item quando o formulário for submetido
stockRecord.addEventListener('submit', addItem);

// Inicializa a exibição do estoque
displayStock();



/*
          
          <td>${item.model}</td>
          <td>${item.serialNumber}</td>
*/