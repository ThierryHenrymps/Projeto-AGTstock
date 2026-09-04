function VendasPage() {
  return (
    pageTitle(
      "Vendas",
      "Registre vendas e acompanhe o movimento do caixa.",
      `<button class="btn primary" onclick="showToast('Formulário de venda pronto para conectar à API.')">+ Nova venda</button>`,
    ) +
    `<div class="cards"><div class="card stat"><div><small>Vendas hoje</small><h2>R$ 0,00</h2></div><div class="stat-icon">↗</div></div><div class="card stat"><div><small>Pedidos</small><h2>0</h2></div><div class="stat-icon">#</div></div></div>
  <div class="table-card"><div class="section-head"><h3>Histórico de vendas</h3></div><div class="empty">Nenhuma venda registrada.</div></div>`
  );
}
