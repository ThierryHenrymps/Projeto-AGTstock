const initialProducts=[
  {id:1,nome:"Arroz 5kg",categoria:"Alimentos",preco:29.90,qtd:18,min:5,fornecedor:"Distribuidora Central"},
  {id:2,nome:"Feijão 1kg",categoria:"Alimentos",preco:8.50,qtd:4,min:8,fornecedor:"Distribuidora Central"},
  {id:3,nome:"Refrigerante 2L",categoria:"Bebidas",preco:9.90,qtd:32,min:10,fornecedor:"Bebidas Minas"},
  {id:4,nome:"Detergente",categoria:"Limpeza",preco:3.75,qtd:0,min:5,fornecedor:"LimpaMais"},
  {id:5,nome:"Café 500g",categoria:"Alimentos",preco:16.90,qtd:12,min:5,fornecedor:"Café Bom Dia"},
  {id:6,nome:"Água 1,5L",categoria:"Bebidas",preco:3.50,qtd:25,min:10,fornecedor:"Bebidas Minas"}
];

let products=Storage.get("agtstock_products",initialProducts);
let currentPage="dashboard";

function money(v){return Number(v).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
function getStatus(p){return p.qtd===0?{text:"Sem estoque",cls:"out"}:p.qtd<=p.min?{text:"Estoque baixo",cls:"low"}:{text:"Normal",cls:"ok"}}
function saveProducts(){Storage.set("agtstock_products",products)}
function showToast(msg){let t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.style.cssText="position:fixed;right:22px;bottom:22px;background:#302922;color:white;padding:12px 16px;border-radius:8px;font-size:11px;z-index:30";document.body.appendChild(t)}t.textContent=msg;setTimeout(()=>t.textContent="",2200)}
function pageTitle(h,sub,button=""){return `<div class="page-title"><div><h1>${h}</h1><p>${sub}</p></div>${button}</div>`}

function go(page){currentPage=page;render()}
function render(){
  let page="";
  if(currentPage==="dashboard") page=DashboardPage();
  if(currentPage==="produtos") page=ProdutosPage();
  if(currentPage==="estoque") page=EstoquePage();
  if(currentPage==="vendas") page=VendasPage();
  if(currentPage==="clientes") page=ClientesPage();
  if(currentPage==="fornecedores") page=FornecedoresPage();
  if(currentPage==="relatorios") page=RelatoriosPage();
  if(currentPage==="configuracoes") page=ConfiguracoesPage();

  document.getElementById("app").innerHTML=Sidebar()+`<main class="main">${Topbar()}<section class="content">${page}</section></main>`;
  document.querySelectorAll(".nav-item[data-page]").forEach(x=>x.classList.toggle("active",x.dataset.page===currentPage));
}

function openProductModal(id=null){
  const p=id?products.find(x=>x.id===id):null;
  const modal=document.createElement("div");modal.className="modal-backdrop show";modal.id="productModal";
  modal.innerHTML=`<div class="modal"><div class="modal-head"><h3>${p?"Editar produto":"Novo produto"}</h3><button onclick="closeProductModal()">×</button></div>
  <form onsubmit="saveProduct(event,${id||"null"})">
    <label>Nome<input id="pNome" required value="${p?.nome||""}"></label>
    <div class="grid-2"><label>Categoria<input id="pCategoria" required value="${p?.categoria||""}"></label><label>Preço<input id="pPreco" type="number" step="0.01" min="0" required value="${p?.preco||""}"></label></div>
    <div class="grid-2"><label>Quantidade<input id="pQtd" type="number" min="0" required value="${p?.qtd??""}"></label><label>Estoque mínimo<input id="pMin" type="number" min="0" required value="${p?.min??""}"></label></div>
    <label>Fornecedor<input id="pFornecedor" value="${p?.fornecedor||""}"></label>
    <div class="modal-actions"><button type="button" class="btn ghost" onclick="closeProductModal()">Cancelar</button><button class="btn primary">Salvar produto</button></div>
  </form></div>`;
  document.body.appendChild(modal);
}
function closeProductModal(){document.getElementById("productModal")?.remove()}
function saveProduct(e,id){e.preventDefault();const data={id:id||Date.now(),nome:pNome.value,categoria:pCategoria.value,preco:Number(pPreco.value),qtd:Number(pQtd.value),min:Number(pMin.value),fornecedor:pFornecedor.value};if(id)products=products.map(p=>p.id===id?data:p);else products.push(data);saveProducts();closeProductModal();render();showToast(id?"Produto atualizado!":"Produto cadastrado!")}
function editProduct(id){openProductModal(id)}
function deleteProduct(id){const p=products.find(x=>x.id===id);if(confirm(`Excluir "${p.nome}"?`)){products=products.filter(x=>x.id!==id);saveProducts();render();showToast("Produto excluído!")}}
render();