function FornecedoresPage() {
  return (
    pageTitle(
      "Fornecedores",
      "Organize seus fornecedores e contatos.",
      `<button class="btn primary" onclick="showToast('Cadastro de fornecedor pronto para integrar ao Spring.')">+ Novo fornecedor</button>`,
    ) +
    `<div class="table-card"><div class="empty">Nenhum fornecedor cadastrado ainda.</div></div>`
  );
}
