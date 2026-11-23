package com.api.stock.controller;

import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.stock.dto.ClienteDTO;
import com.api.stock.model.Cliente;
import com.api.stock.repository.ClienteRepository;

@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> get() {
        List<ClienteDTO> clientes = repository.findAll().stream().map(ClienteDTO::create).toList();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> getById(@PathVariable("id") Long id) {
        return repository.findById(id)
                .map(c -> ResponseEntity.ok(ClienteDTO.create(c)))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<ClienteDTO>> getByEmail(@PathVariable("email") String email) {
        List<ClienteDTO> cliente = repository.getClientByEmail(email);
        return cliente.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(cliente);
    }

    @GetMapping("/telefone/{telefone}")
    public ResponseEntity<List<ClienteDTO>> getByNumber(@PathVariable("telefone") String telefone) {
        List<ClienteDTO> cliente = repository.getClientByTelefone(telefone);
        return cliente.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(cliente);
    }

    @GetMapping("/endereco/{endereco}")
    public ResponseEntity<List<ClienteDTO>> getByEndereco(@PathVariable("endereco") String endereco) {
        List<ClienteDTO> cliente = repository.getClientByEndereco(endereco);
        return cliente.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<ClienteDTO> create(@RequestBody Cliente cliente) {
        Cliente saved = repository.save(cliente);
        return ResponseEntity.ok(ClienteDTO.create(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteDTO> update(@PathVariable("id") Long id, @RequestBody Cliente clienteDetails) {
        return repository.findById(id).map(cliente -> {
            cliente.setNome(clienteDetails.getNome());
            cliente.setCpf(clienteDetails.getCpf());
            cliente.setTelefone(clienteDetails.getTelefone());
            cliente.setEmail(clienteDetails.getEmail());
            cliente.setEndereco(clienteDetails.getEndereco());
            Cliente updated = repository.save(cliente);
            return ResponseEntity.ok(ClienteDTO.create(updated));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return repository.findById(id).map(cliente -> {
            repository.delete(cliente);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
