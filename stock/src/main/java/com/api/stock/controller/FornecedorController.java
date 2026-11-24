package com.api.stock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.stock.dto.ClienteDTO;
import com.api.stock.dto.FornecedorDTO;
import com.api.stock.model.Cliente;
import com.api.stock.model.Fornecedor;
import com.api.stock.repository.ClienteRepository;
import com.api.stock.repository.FornecedorRepository;

@RestController 
@RequestMapping("/api/v1/fornecedores")
public class FornecedorController {

    @Autowired
    private FornecedorRepository repository;

    @GetMapping
    public ResponseEntity<List<FornecedorDTO>> get() {
        List<FornecedorDTO> fornecedores = repository.findAll().stream().map(FornecedorDTO::create).toList();
        return ResponseEntity.ok(fornecedores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FornecedorDTO> getById(@PathVariable("id") Long id) {
        return repository.findById(id)
                .map(f -> ResponseEntity.ok(FornecedorDTO.create(f)))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<FornecedorDTO>> getByEmail(@PathVariable("email") String email) {
        List<FornecedorDTO> fornecedor = repository.getFornecedorByEmail(email);
        return fornecedor.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(fornecedor);
    }

    @GetMapping("/telefone/{telefone}")
    public ResponseEntity<List<FornecedorDTO>> getByNumber(@PathVariable("telefone") String telefone) {
        List<FornecedorDTO> fornecedor = repository.getFornecedorByTelefone(telefone);
        return fornecedor.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(fornecedor);
    }

    @GetMapping("/endereco/{endereco}")
    public ResponseEntity<List<FornecedorDTO>> getByEndereco(@PathVariable("endereco") String endereco) {
        List<FornecedorDTO> fornecedor = repository.getFornecedorByEndereco(endereco);
        return fornecedor.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(fornecedor);
    }

    @PostMapping
    public ResponseEntity<FornecedorDTO> create(@RequestBody Fornecedor fornecedor) {
        Fornecedor saved = repository.save(fornecedor);
        return ResponseEntity.ok(FornecedorDTO.create(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FornecedorDTO> update(@PathVariable("id") Long id, @RequestBody Fornecedor fornecedorDetails) {
        return repository.findById(id).map(fornecedor -> {
            fornecedor.setNome(fornecedorDetails.getNome());
            fornecedor.setCnpj(fornecedorDetails.getCnpj());
            fornecedor.setTelefone(fornecedorDetails.getTelefone());
            fornecedor.setEmail(fornecedorDetails.getEmail());
            fornecedor.setEndereco(fornecedorDetails.getEndereco());
            Fornecedor updated = repository.save(fornecedor);
            return ResponseEntity.ok(FornecedorDTO.create(updated));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return repository.findById(id).map(fornecedor -> {
            repository.delete(fornecedor);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
    
}
