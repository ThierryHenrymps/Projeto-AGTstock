function ConfiguracoesPage() {
  return (
    pageTitle("Configurações", "Ajuste os dados básicos do seu comércio.") +
    `<div class="card form-card"><div class="settings-grid">
    <label>Nome do comércio<input id="storeName" value="Meu Comércio"></label>
    <label>CNPJ<input placeholder="00.000.000/0001-00"></label>
    <label>Telefone<input placeholder="(00) 00000-0000"></label>
    <label>E-mail<input placeholder="contato@comercio.com"></label>
  </div><button class="btn primary" onclick="showToast('Configurações salvas.')">Salvar alterações</button></div>`
  );
}
