function ClientesPage() {
  return (
    pageTitle(
      "Clientes",
      "Cadastre e acompanhe os clientes do comércio.",
      `<button class="btn primary" onclick="showToast('Cadastro de cliente pronto para integrar ao Spring.')">+ Novo cliente</button>`,
    ) +
    `<div class="table-card"><div class="empty">Nenhum cliente cadastrado ainda.</div></div>`
  );
}
