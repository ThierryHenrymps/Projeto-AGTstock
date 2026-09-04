# AGTStock Front-end

Front-end separado para futura integração com Spring Boot.

## Estrutura

- `index.html` — entrada da aplicação
- `css/` — estilos
- `assets/images/` — imagens
- `js/app.js` — inicialização e navegação
- `js/pages/` — telas
- `js/components/` — componentes reutilizáveis
- `js/services/api.js` — comunicação com Spring Boot
- `js/utils/storage.js` — armazenamento temporário

## Integração futura

O arquivo `js/services/api.js` já possui a estrutura para:

GET    /api/v1/produtos
POST   /api/v1/produtos
PUT    /api/v1/produtos/{id}
DELETE /api/v1/produtos/{id}

Quando o backend estiver pronto, a ideia é retirar os dados de exemplo do `localStorage` e carregar os dados pela API.

## Sugestão de backend

Spring Boot:
- Produto
- Categoria
- Estoque
- Venda
- ItemVenda
- Cliente
- Fornecedor
- Usuario

Banco:
- MySQL

O front e o backend ficam separados, facilitando a manutenção do projeto.