function Sidebar() {
  return `<aside class="sidebar">
    <div class="brand"><div class="brand-icon">A</div><div><strong>AGTStock</strong><small>Gestão simples</small></div></div>
    <nav>
      ${[
        ["dashboard","⌂","Dashboard"],["produtos","▣","Produtos"],["estoque","▤","Estoque"],
        ["vendas","↗","Vendas"],["clientes","♙","Clientes"],["fornecedores","◈","Fornecedores"],["relatorios","▥","Relatórios"]
      ].map(x=>`<button class="nav-item" data-page="${x[0]}" onclick="go('${x[0]}')">${x[1]} <span>${x[2]}</span></button>`).join("")}
    </nav>
    <div class="sidebar-bottom">
      <button class="nav-item" data-page="configuracoes" onclick="go('configuracoes')">⚙ <span>Configurações</span></button>
      <button class="nav-item" onclick="showToast('Logout pronto para integrar com Spring Security.')">⇥ <span>Sair</span></button>
    </div>
  </aside>`;
}