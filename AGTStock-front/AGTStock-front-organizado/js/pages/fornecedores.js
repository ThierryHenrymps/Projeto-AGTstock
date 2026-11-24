function FornecedoresPage() {
  return (
    pageTitle(
      "Fornecedores",
      "Organize os fornecedores, contatos e informações comerciais.",
      `<button class="btn primary" onclick="abrirModalFornecedor()">+ Novo fornecedor</button>`,
    ) +
    `
    <div class="list-toolbar"><input class="search" placeholder="Buscar por nome, CNPJ ou e-mail..." oninput="filtrarTabela('fornecedores-table', this.value)"><button class="btn ghost" onclick="carregarFornecedores()">Atualizar</button></div>
    <div class="table-card"><div class="table-scroll"><table class="data-table"><thead><tr><th>Fornecedor</th><th>CNPJ</th><th>Telefone</th><th>E-mail</th><th>Endereço</th><th>Ações</th></tr></thead><tbody id="fornecedores-table"><tr><td colspan="6" class="empty-cell">Carregando fornecedores...</td></tr></tbody></table></div></div>`
  );
}
async function carregarFornecedores() {
  const tbody = document.getElementById("fornecedores-table");
  if (!tbody) return;
  tbody.innerHTML = `<tr><td colspan="6" class="empty-cell">Carregando fornecedores...</td></tr>`;
  try {
    const dados = await API.listFornecedores();
    if (!document.getElementById("fornecedores-table")) return;
    if (!Array.isArray(dados) || !dados.length) {
      tbody.innerHTML = `<tr><td colspan="6" class="empty-cell">Nenhum fornecedor cadastrado. Clique em “Novo fornecedor” para começar.</td></tr>`;
      return;
    }
    tbody.innerHTML = dados
      .map(
        (f) =>
          `<tr data-search="${[f.nome, f.cnpj, f.email, f.telefone].join(" ").toLowerCase()}"><td><strong>${escapeHTML(f.nome)}</strong></td><td>${escapeHTML(f.cnpj)}</td><td>${escapeHTML(f.telefone)}</td><td>${escapeHTML(f.email)}</td><td>${escapeHTML(f.endereco)}</td><td class="actions-cell"><button class="btn small" onclick="editarFornecedor(${f.id})">Editar</button> <button class="btn small danger-btn" onclick="excluirFornecedor(${f.id})">Excluir</button></td></tr>`,
      )
      .join("");
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-cell error-text">${escapeHTML(e.message)}. Confira se o Spring Boot está rodando.</td></tr>`;
  }
}
function abrirModalFornecedor(fornecedor = null) {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop show";
  modal.id = "fornecedorModal";
  modal.innerHTML = `<div class="modal"><div class="modal-head"><div><h3>${fornecedor ? "Editar fornecedor" : "Novo fornecedor"}</h3><p>Preencha os dados do fornecedor.</p></div><button type="button" onclick="fecharModal('fornecedorModal')">×</button></div><form onsubmit="salvarFornecedor(event, ${fornecedor?.id ?? "null"})"><label>Nome / Razão social<input name="nome" required value="${escapeHTML(fornecedor?.nome)}"></label><div class="grid-2"><label>CNPJ<input name="cnpj" required value="${escapeHTML(fornecedor?.cnpj)}"></label><label>Telefone<input name="telefone" required value="${escapeHTML(fornecedor?.telefone)}"></label></div><label>E-mail<input name="email" type="email" required value="${escapeHTML(fornecedor?.email)}"></label><label>Endereço<input name="endereco" required value="${escapeHTML(fornecedor?.endereco)}"></label><div class="modal-actions"><button type="button" class="btn ghost" onclick="fecharModal('fornecedorModal')">Cancelar</button><button class="btn primary">Salvar fornecedor</button></div></form></div>`;
  document.body.appendChild(modal);
}
async function salvarFornecedor(event, id) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  try {
    if (id) await API.updateFornecedor(id, data);
    else await API.createFornecedor(data);
    fecharModal("fornecedorModal");
    showToast(id ? "Fornecedor atualizado!" : "Fornecedor cadastrado!");
    await carregarFornecedores();
  } catch (e) {
    showToast(`Não foi possível salvar: ${e.message}`);
  }
}
async function editarFornecedor(id) {
  try {
    abrirModalFornecedor(await API.getFornecedor(id));
  } catch (e) {
    showToast(`Erro ao buscar fornecedor: ${e.message}`);
  }
}
async function excluirFornecedor(id) {
  if (!confirm("Deseja realmente excluir este fornecedor?")) return;
  try {
    await API.deleteFornecedor(id);
    showToast("Fornecedor excluído!");
    await carregarFornecedores();
  } catch (e) {
    showToast(`Não foi possível excluir: ${e.message}`);
  }
}
