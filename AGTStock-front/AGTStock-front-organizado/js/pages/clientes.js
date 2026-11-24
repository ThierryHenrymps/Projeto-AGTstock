function ClientesPage() {
  return (
    pageTitle(
      "Clientes",
      "Cadastre, consulte e mantenha os dados dos seus clientes.",
      `<button class="btn primary" onclick="abrirModalCliente()">+ Novo cliente</button>`,
    ) +
    `
    <div class="list-toolbar"><input class="search" placeholder="Buscar por nome, CPF ou e-mail..." oninput="filtrarTabela('clientes-table', this.value)"><button class="btn ghost" onclick="carregarClientes()">Atualizar</button></div>
    <div class="table-card"><div class="table-scroll"><table class="data-table"><thead><tr><th>Nome</th><th>CPF</th><th>Telefone</th><th>E-mail</th><th>Endereço</th><th>Ações</th></tr></thead><tbody id="clientes-table"><tr><td colspan="6" class="empty-cell">Carregando clientes...</td></tr></tbody></table></div></div>`
  );
}
async function carregarClientes() {
  const tbody = document.getElementById("clientes-table");
  if (!tbody) return;
  tbody.innerHTML = `<tr><td colspan="6" class="empty-cell">Carregando clientes...</td></tr>`;
  try {
    const dados = await API.listClientes();
    if (!document.getElementById("clientes-table")) return;
    if (!Array.isArray(dados) || !dados.length) {
      tbody.innerHTML = `<tr><td colspan="6" class="empty-cell">Nenhum cliente cadastrado. Clique em “Novo cliente” para começar.</td></tr>`;
      return;
    }
    tbody.innerHTML = dados
      .map(
        (c) =>
          `<tr data-search="${[c.nome, c.cpf, c.email, c.telefone].join(" ").toLowerCase()}"><td><strong>${escapeHTML(c.nome)}</strong></td><td>${escapeHTML(c.cpf)}</td><td>${escapeHTML(c.telefone)}</td><td>${escapeHTML(c.email)}</td><td>${escapeHTML(c.endereco)}</td><td class="actions-cell"><button class="btn small" onclick="editarCliente(${c.id})">Editar</button> <button class="btn small danger-btn" onclick="excluirCliente(${c.id})">Excluir</button></td></tr>`,
      )
      .join("");
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-cell error-text">${escapeHTML(e.message)}. Confira se o Spring Boot está rodando.</td></tr>`;
  }
}
function abrirModalCliente(cliente = null) {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop show";
  modal.id = "clienteModal";
  modal.innerHTML = `<div class="modal"><div class="modal-head"><div><h3>${cliente ? "Editar cliente" : "Novo cliente"}</h3><p>Preencha os dados do cliente.</p></div><button type="button" onclick="fecharModal('clienteModal')">×</button></div><form onsubmit="salvarCliente(event, ${cliente?.id ?? "null"})"><label>Nome completo<input name="nome" required value="${escapeHTML(cliente?.nome)}"></label><div class="grid-2"><label>CPF<input name="cpf" required value="${escapeHTML(cliente?.cpf)}"></label><label>Telefone<input name="telefone" required value="${escapeHTML(cliente?.telefone)}"></label></div><label>E-mail<input name="email" type="email" required value="${escapeHTML(cliente?.email)}"></label><label>Endereço<input name="endereco" required value="${escapeHTML(cliente?.endereco)}"></label><div class="modal-actions"><button type="button" class="btn ghost" onclick="fecharModal('clienteModal')">Cancelar</button><button class="btn primary">Salvar cliente</button></div></form></div>`;
  document.body.appendChild(modal);
}
async function salvarCliente(event, id) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  try {
    if (id) await API.updateCliente(id, data);
    else await API.createCliente(data);
    fecharModal("clienteModal");
    showToast(id ? "Cliente atualizado!" : "Cliente cadastrado!");
    await carregarClientes();
  } catch (e) {
    showToast(`Não foi possível salvar: ${e.message}`);
  }
}
async function editarCliente(id) {
  try {
    abrirModalCliente(await API.getCliente(id));
  } catch (e) {
    showToast(`Erro ao buscar cliente: ${e.message}`);
  }
}
async function excluirCliente(id) {
  if (!confirm("Deseja realmente excluir este cliente?")) return;
  try {
    await API.deleteCliente(id);
    showToast("Cliente excluído!");
    await carregarClientes();
  } catch (e) {
    showToast(`Não foi possível excluir: ${e.message}`);
  }
}
