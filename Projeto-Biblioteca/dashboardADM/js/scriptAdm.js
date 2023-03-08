let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

const allDivs = [
  (divPainel = document.querySelector(".div-painel")),
  (divUsers = document.querySelector(".div-users")),
  (divMsg = document.querySelector(".div-msg")),
  (divAnalytics = document.querySelector(".div-analytics")),
  (divBooks = document.querySelector(".div-books")),
  (divConfig = document.querySelector(".div-config")),
];

const buttonPainel = document.querySelector(".buttonPainel");
const buttonUser = document.querySelector(".buttonUsers");
const buttonMsg = document.querySelector(".buttonMsg");
const buttonAnalytics = document.querySelector(".buttonAnalytics");
const buttonBook = document.querySelector(".buttonBooks");
const buttonConfig = document.querySelector(".buttonConfig");

buttonPainel.addEventListener("click", () => {
  document.querySelector("#btnActive").removeAttribute("id");
  buttonPainel.setAttribute("id", "btnActive");
  divPainel.style.display = "block";
  allDivs[1].style = "display: none;";
  allDivs[2].style = "display: none;";
  allDivs[3].style = "display: none;";
  allDivs[4].style = "display: none;";
  allDivs[5].style = "display: none;";
});

buttonUser.addEventListener("click", () => {
  document.querySelector("#btnActive").removeAttribute("id");
  buttonUser.setAttribute("id", "btnActive");
  divUsers.style.display = "block";
  allDivs[0].style = "display: none;";
  allDivs[2].style = "display: none;";
  allDivs[3].style = "display: none;";
  allDivs[4].style = "display: none;";
  allDivs[5].style = "display: none;";
});

buttonMsg.addEventListener("click", () => {
  document.querySelector("#btnActive").removeAttribute("id");
  buttonMsg.setAttribute("id", "btnActive");
  divMsg.style.display = "block";
  allDivs[0].style = "display: none;";
  allDivs[1].style = "display: none;";
  allDivs[3].style = "display: none;";
  allDivs[4].style = "display: none;";
  allDivs[5].style = "display: none;";
});

buttonAnalytics.addEventListener("click", () => {
  document.querySelector("#btnActive").removeAttribute("id");
  buttonAnalytics.setAttribute("id", "btnActive");
  divAnalytics.style.display = "block";
  allDivs[0].style = "display: none;";
  allDivs[1].style = "display: none;";
  allDivs[2].style = "display: none;";
  allDivs[4].style = "display: none;";
  allDivs[5].style = "display: none;";
});

buttonBook.addEventListener("click", () => {
  document.querySelector("#btnActive").removeAttribute("id");
  buttonBook.setAttribute("id", "btnActive");
  divBooks.style.display = "block";
  allDivs[0].style = "display: none;";
  allDivs[1].style = "display: none;";
  allDivs[2].style = "display: none;";
  allDivs[3].style = "display: none;";
  allDivs[5].style = "display: none;";
});

buttonConfig.addEventListener("click", () => {
  document.querySelector("#btnActive").removeAttribute("id");
  buttonConfig.setAttribute("id", "btnActive");
  divConfig.style.display = "block";
  allDivs[0].style = "display: none;";
  allDivs[1].style = "display: none;";
  allDivs[2].style = "display: none;";
  allDivs[3].style = "display: none;";
  allDivs[4].style = "display: none;";
});

const imgPerfil = document.querySelector(".img-perfil");
const tooltip = document.querySelector(".tooltipProfile");

console.log(imgPerfil);
console.log(tooltip);

imgPerfil.addEventListener("click", () => {
  tooltip.style = "display: block;"
  console.log('Funcionou');
});


// for (const imgPerfil of imgPerfil) {
//   imgPerfil.addEventListener("focus", function (click) {
//     tooltip.style = "opacity: 1;";
//   });
  
//   imgPerfil.addEventListener("blur", function (click) {
//     tooltip.style = "opacity: 0;";
//   });
// }


("use strict");

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

// CRUD - create read update delete
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const readClient = () => getLocalStorage();

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

//Interação com o layout

const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => (field.value = ""));
  document.getElementById("livro").dataset.index = "new";
  document.querySelector(".modal-div>h2").textContent = "Novo Cliente";
};

const saveClient = () => {
  if (isValidFields()) {
    const client = {
      inputFileLivro: document.getElementById("inputFileLivro").value,
      livro: document.getElementById("livro").value,
      inputFileAutor: document.getElementById("inputFileAutor").value,
      autor: document.getElementById("autor").value,
      lançamento: document.getElementById("lançamento").value,
      descricao: document.getElementById("descricao").value,
    };
    const index = document.getElementById("livro").dataset.index;
    if (index == "new") {
      createClient(client);
      updateTable();
      closeModal();
    } else {
      updateClient(index, client);
      updateTable();
      closeModal();
    }
  }
};

const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>
          <img src="image/${client.inputFileLivro}">
        </td>
        <td>${client.livro}</td>
        <td>
          <img src="image/${client.inputFileAutor}">
          ${client.autor}
        </td>
        <td>${client.lançamento}</td>
        <td>${client.descricao}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
};

const clearTable = () => {
  const rows = document.querySelectorAll("#tableClient>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};

const fillFields = (client) => {
  document.getElementById("inputFileLivro").value = client.inputFileLivro;
  document.getElementById("livro").value = client.livro;
  document.getElementById("inputFileAutor").value = client.inputFileAutor;
  document.getElementById("autor").value = client.autor;
  document.getElementById("lançamento").value = client.lançamento;
  document.getElementById("descricao").value = client.descricao;
  document.getElementById("livro").dataset.index = client.index;
};

const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  document.querySelector(
    ".modal-div>h2"
  ).textContent = `Editando ${client.livro}`;
  openModal();
};

const editDelete = (event) => {
  if (event.target.type == "button") {
    const [action, index] = event.target.id.split("-");

    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const response = confirm(
        `Deseja realmente excluir o cliente ${client.livro}`
      );
      if (response) {
        deleteClient(index);
        updateTable();
      }
    }
  }
};

updateTable();

// Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);

document
  .querySelector("#tableClient>tbody")
  .addEventListener("click", editDelete);

document.getElementById("cancelar").addEventListener("click", closeModal);
