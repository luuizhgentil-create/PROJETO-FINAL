document.addEventListener("DOMContentLoaded", function () {

  const listaFilmes = document.getElementById("lista-filmes");
  const listaCombos = document.getElementById("lista-combos");

  let total = 0;

  // =====================================
  // CRIAR CARD FILME
  // =====================================
  function criarCardFilme(filme) {

    return `
      <li class="card" data-categoria="${filme.categoria}">

        <div class="card-img-wrap">
          <img src="${filme.imagem}" alt="${filme.nome}">
        </div>

        <div class="card-content">

          <span class="card-tag">🎬 Filme</span>

          <h3>${filme.nome}</h3>

          <p>${filme.descricao}</p>

          <p class="preco">
            R$ ${filme.preco},00
          </p>

          <button class="btn-comprar"
            data-nome="${filme.nome}"
            data-preco="${filme.preco}">
            Comprar
          </button>

        </div>

      </li>
    `;
  }

  // =====================================
  // CRIAR CARD COMBO
  // =====================================
  function criarCardCombo(combo) {

    return `
      <li class="card">

        <div class="card-img-wrap">
          <img src="${combo.imagem}" alt="${combo.nome}">
        </div>

        <div class="card-content">

          <span class="card-tag">🍿 Combo</span>

          <h3>${combo.nome}</h3>

          <p>${combo.descricao}</p>

          <p class="preco">
            R$ ${combo.preco},00
          </p>

          <button class="btn-comprar"
            data-nome="${combo.nome}"
            data-preco="${combo.preco}">
            Adicionar
          </button>

        </div>

      </li>
    `;
  }

  // =====================================
  // RENDERIZAR
  // =====================================
  listaFilmes.innerHTML =
    FILMES.map(criarCardFilme).join("");

  listaCombos.innerHTML =
    COMBOS.map(criarCardCombo).join("");

  // =====================================
  // BOTÕES COMPRAR
  // =====================================
  document.addEventListener("click", function (e) {

    if (e.target.classList.contains("btn-comprar")) {

      const nome = e.target.dataset.nome;
      const preco = Number(e.target.dataset.preco);

      total += preco;

      document.getElementById("total").textContent =
        `R$ ${total},00`;

      const carrinho =
        document.getElementById("itens-carrinho");

      carrinho.innerHTML += `
        <li>
          ${nome} - R$ ${preco},00
        </li>
      `;
    }
  });

});