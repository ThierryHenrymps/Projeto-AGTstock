function ProdutosPage() {
  return (
    pageTitle(
      "Produtos",
      "Cadastre, edite e exclua os produtos do seu comércio.",
      `<button class="btn primary" onclick="openProductModal()">+ Novo produto</button>`,
    ) +
    `<div class="table-card"><div class="search-row">
    <input class="search" id="productSearch" placeholder="🔎 Buscar produto..." oninput="filterProducts()">
    <select class="search" id="categoryFilter" onchange="filterProducts()"><option value="">Todas categorias</option><option>Alimentos</option><option>Bebidas</option><option>Limpeza</option></select>
  </div><div id="productsTable">${productTable(products, true)}</div></div>`
  );
}

function productTable(arr, actions = true) {
  if (!arr.length) return `<div class="empty">Nenhum produto encontrado.</div>`;
  return `<table><thead><tr><th>Produto</th><th>Categoria</th><th>Preço</th><th>Quantidade</th><th>Status</th>${actions ? "<th>Ações</th>" : ""}</tr></thead><tbody>
  ${arr
    .map((p) => {
      const s = getStatus(p);
      return `<tr><td><b>${p.nome}</b><br><small>${p.fornecedor || "Sem fornecedor"}</small></td><td>${p.categoria}</td><td>${money(p.preco)}</td><td>${p.qtd}</td><td><span class="badge ${s.cls}">${s.text}</span></td>${actions ? `<td><div class="actions"><button class="mini" onclick="editProduct(${p.id})">Editar</button><button class="mini danger" onclick="deleteProduct(${p.id})">Excluir</button></div></td>` : ""}</tr>`;
    })
    .join("")}</tbody></table>`;
}

function filterProducts() {
  const q = (
    document.getElementById("productSearch")?.value || ""
  ).toLowerCase();
  const cat = document.getElementById("categoryFilter")?.value || "";
  const result = products.filter(
    (p) =>
      (p.nome.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)) &&
      (!cat || p.categoria === cat),
  );
  document.getElementById("productsTable").innerHTML = productTable(
    result,
    true,
  );
}
