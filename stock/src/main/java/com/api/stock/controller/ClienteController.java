package com.api.stock.controller;

import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.stock.dto.ClienteDTO;
import com.api.stock.dto.EstoqueDTO;

import repository.ClienteRepository;
import org.springframework.web.bind.annotation.RequestParam;


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
    public ResponseEntity <List<ClienteDTO>> getById(@PathVariable ("id") Long id) {
        List<ClienteDTO> cliente = repository.getClientById(id);
        return ResponseEntity.ok(cliente);
    }

    @GetMapping("/email{email}")
    public ResponseEntity <List<ClienteDTO>> getByEmail(@PathVariable ("email") String email ) {
        List<ClienteDTO> cliente = repository.getClientByEmail(email);
        
        return cliente.isEmpty() ?
        ResponseEntity.noContent().build():
        ResponseEntity.ok(cliente);
    }

    @GetMapping("/number{number}")
    public ResponseEntity <List<ClienteDTO>> getByNumber(@PathVariable ("number") String number) {
        List<ClienteDTO> cliente = repository.getClientByNumber(number);

        return cliente.isEmpty() ?
        ResponseEntity.noContent().build():
        ResponseEntity.ok(cliente);
    }

    @GetMapping("/endereco{endereco}")
    public ResponseEntity <List<ClienteDTO>> getByEndereco(@PathVariable ("endereco") String endereco) {
        List<ClienteDTO> cliente = repository.getClientByEndereco(endereco);

        return cliente.isEmpty() ?
        ResponseEntity.noContent().build():
        ResponseEntity.ok(cliente);
    }
    


    
    
    



    
    
}
