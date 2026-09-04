function DashboardPage() {
  const total = products.reduce((a, p) => a + p.qtd, 0);
  const low = products.filter((p) => p.qtd > 0 && p.qtd <= p.min).length;
  const out = products.filter((p) => p.qtd === 0).length;
  const attention = products.filter((p) => p.qtd <= p.min);
  return (
    pageTitle("Olá, Henry ", "Aqui está o resumo do seu comércio hoje.") +
    `<div class="cards">
    <div class="card stat"><div><small>Total de produtos</small><h2>${products.length}</h2></div><div class="stat-icon">▣</div></div>
    <div class="card stat"><div><small>Itens em estoque</small><h2>${total}</h2></div><div class="stat-icon">▤</div></div>
    <div class="card stat"><div><small>Estoque baixo</small><h2>${low}</h2></div><div class="stat-icon">!</div></div>
    <div class="card stat"><div><small>Sem estoque</small><h2>${out}</h2></div><div class="stat-icon">×</div></div>
  </div>
  <div class="dashboard-grid">
    <div class="table-card"><div class="section-head"><h3>Produtos que precisam de atenção</h3><a onclick="go('estoque')">Ver estoque →</a></div>
      ${attention.length ? productTable(attention, false) : `<div class="empty">Tudo certo! Nenhum produto abaixo do mínimo.</div>`}
    </div>
    <div class="card"><div class="section-head"><h3>Ações rápidas</h3></div><div class="quick">
      <button onclick="openProductModal()"><b>＋ Produto</b><small>Cadastrar item</small></button>
      <button onclick="go('estoque')"><b>⇅ Estoque</b><small>Entrada ou saída</small></button>
      <button onclick="go('vendas')"><b>↗ Venda</b><small>Registrar venda</small></button>
      <button onclick="go('relatorios')"><b>▥ Relatórios</b><small>Ver resultados</small></button>
    </div></div>
  </div>`
  );
}
