function RelatoriosPage() {
  return (
    pageTitle("Relatórios", "Área de relatórios do AGTStock.") +
    `<div class="report-intro"><div class="report-icon">▥</div><div><h2>Central de relatórios</h2><p>Selecione uma opção para abrir a tela de visualização. A geração dos dados será implementada depois.</p></div></div><div class="report-cards">${reportCard("Estoque", "Quantidades, itens abaixo do mínimo e produtos sem estoque.", "▤", "estoque")}${reportCard("Vendas", "Resumo de vendas, faturamento e movimentações.", "↗", "vendas")}${reportCard("Produtos", "Catálogo, categorias e preços cadastrados.", "▣", "produtos")}${reportCard("Clientes", "Cadastro e informações dos clientes.", "♙", "clientes")}${reportCard("Fornecedores", "Cadastro e informações dos fornecedores.", "◈", "fornecedores")}</div><section class="report-preview" id="report-preview"><div class="empty">Escolha um relatório acima para visualizar esta área.</div></section>`
  );
}
function reportCard(title, description, icon, type) {
  return `<article class="card report-card"><div class="report-card-icon">${icon}</div><h3>${title}</h3><p>${description}</p><button class="btn primary" onclick="abrirRelatorio('${type}')">Abrir relatório</button></article>`;
}
function abrirRelatorio(tipo) {
  const nomes = {
    estoque: "Estoque",
    vendas: "Vendas",
    produtos: "Produtos",
    clientes: "Clientes",
    fornecedores: "Fornecedores",
  };
  const nome = nomes[tipo];
  const preview = document.getElementById("report-preview");
  if (!preview) return;
  preview.innerHTML = `<div class="report-preview-head"><div><span class="eyebrow">VISUALIZAÇÃO DO RELATÓRIO</span><h2>Relatório de ${nome}</h2></div><span class="status-pill">Em desenvolvimento</span></div><div class="report-placeholder"><div class="report-placeholder-icon">▧</div><h3>Esta tela está preparada para receber os dados</h3><p>O layout do relatório de ${nome.toLowerCase()} está criado. Consultas, indicadores, filtros e exportação poderão ser implementados aqui depois.</p><div class="placeholder-grid"><div><small>Período</small><strong>A definir</strong></div><div><small>Registros</small><strong>—</strong></div><div><small>Última atualização</small><strong>—</strong></div></div></div>`;
  preview.scrollIntoView({ behavior: "smooth", block: "start" });
}
