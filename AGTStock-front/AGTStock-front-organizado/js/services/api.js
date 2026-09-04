// Serviço central da API.
// Quando o Spring Boot estiver pronto, altere apenas esta configuração.
const API = {
  baseURL: "http://localhost:8080/api/v1",

  async request(endpoint, options = {}) {
    const response = await fetch(this.baseURL + endpoint, {
      headers: {"Content-Type": "application/json", ...(options.headers || {})},
      ...options
    });
    if (!response.ok) throw new Error(`Erro HTTP ${response.status}`);
    return response.status === 204 ? null : response.json();
  },

  get(endpoint) { return this.request(endpoint); },
  post(endpoint, data) { return this.request(endpoint,{method:"POST",body:JSON.stringify(data)}); },
  put(endpoint, data) { return this.request(endpoint,{method:"PUT",body:JSON.stringify(data)}); },
  delete(endpoint) { return this.request(endpoint,{method:"DELETE"}); }
};

// Exemplos para ligar ao Spring depois:
// API.get("/produtos")
// API.post("/produtos", produto)
// API.put("/produtos/" + id, produto)
// API.delete("/produtos/" + id)