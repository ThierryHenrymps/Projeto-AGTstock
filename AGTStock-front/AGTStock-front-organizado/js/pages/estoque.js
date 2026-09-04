function EstoquePage() {
  return (
    pageTitle(
      "Estoque",
      "Controle entradas, saídas e níveis mínimos.",
      `<button class="btn primary" onclick="stockOperation()">⇅ Registrar operação</button>`,
    ) +
    `<div class="table-card"><div class="section-head"><h3>Posição atual do estoque</h3></div>${productTable(products, false)}</div>`
  );
}

function stockOperation() {
  const name = prompt("Nome exato do produto:");
  const p = products.find((x) => x.nome.toLowerCase() === name?.toLowerCase());
  if (!p) return showToast("Produto não encontrado.");
  const type = prompt("Digite ENTRADA ou SAIDA:");
  const qtd = Number(prompt("Quantidade:"));
  if (!qtd || qtd < 0) return;
  if (type?.toLowerCase() === "entrada") p.qtd += qtd;
  else if (type?.toLowerCase() === "saida") p.qtd = Math.max(0, p.qtd - qtd);
  else return showToast("Operação inválida.");
  saveProducts();
  render();
  showToast("Estoque atualizado!");
}
