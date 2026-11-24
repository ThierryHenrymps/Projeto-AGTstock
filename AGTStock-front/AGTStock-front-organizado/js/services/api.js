const API = {
  baseURL: "http://localhost:8080/api/v1",
  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    if (response.status === 204) return null;
    const body = await response.text();
    let data = null;
    if (body) {
      try {
        data = JSON.parse(body);
      } catch {
        data = body;
      }
    }
    if (!response.ok) {
      const message =
        typeof data === "object" && data
          ? data.message || data.detail || data.error
          : data;
      throw new Error(message || `Erro HTTP ${response.status}`);
    }
    return data;
  },
  get(path) {
    return this.request(path);
  },
  post(path, data) {
    return this.request(path, { method: "POST", body: JSON.stringify(data) });
  },
  put(path, data) {
    return this.request(path, { method: "PUT", body: JSON.stringify(data) });
  },
  delete(path) {
    return this.request(path, { method: "DELETE" });
  },
  listClientes() {
    return this.get("/clientes");
  },
  getCliente(id) {
    return this.get(`/clientes/${id}`);
  },
  createCliente(data) {
    return this.post("/clientes", data);
  },
  updateCliente(id, data) {
    return this.put(`/clientes/${id}`, data);
  },
  deleteCliente(id) {
    return this.delete(`/clientes/${id}`);
  },
  getClienteByEmail(email) {
    return this.get(`/clientes/email/${encodeURIComponent(email)}`);
  },
  getClienteByTelefone(tel) {
    return this.get(`/clientes/telefone/${encodeURIComponent(tel)}`);
  },
  getClienteByEndereco(endereco) {
    return this.get(`/clientes/endereco/${encodeURIComponent(endereco)}`);
  },
  listFornecedores() {
    return this.get("/fornecedores");
  },
  getFornecedor(id) {
    return this.get(`/fornecedores/${id}`);
  },
  createFornecedor(data) {
    return this.post("/fornecedores", data);
  },
  updateFornecedor(id, data) {
    return this.put(`/fornecedores/${id}`, data);
  },
  deleteFornecedor(id) {
    return this.delete(`/fornecedores/${id}`);
  },
  getFornecedorByEmail(email) {
    return this.get(`/fornecedores/email/${encodeURIComponent(email)}`);
  },
  getFornecedorByTelefone(tel) {
    return this.get(`/fornecedores/telefone/${encodeURIComponent(tel)}`);
  },
  getFornecedorByEndereco(endereco) {
    return this.get(`/fornecedores/endereco/${encodeURIComponent(endereco)}`);
  },
};
