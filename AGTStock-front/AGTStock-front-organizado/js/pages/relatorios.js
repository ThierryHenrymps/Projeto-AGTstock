function RelatoriosPage() {
  return (
    pageTitle(
      "Relatórios",
      "Visualize informações importantes para tomar decisões.",
    ) +
    `<div class="report-cards">
    <div class="card"><h3>📦 Estoque</h3><p>Produtos em estoque, itens abaixo do mínimo e produtos sem estoque.</p><button class="btn primary" onclick="showToast('Relatório de estoque pronto para integração.')">Gerar relatório</button></div>
    <div class="card"><h3>💰 Vendas</h3><p>Resumo de vendas, faturamento e produtos mais vendidos.</p><button class="btn primary" onclick="showToast('Relatório de vendas pronto para integração.')">Gerar relatório</button></div>
    <div class="card"><h3>🏷️ Produtos</h3><p>Catálogo completo, preços e categorias cadastradas.</p><button class="btn primary" onclick="showToast('Relatório de produtos pronto para integração.')">Gerar relatório</button></div>
  </div>`
  );
}
