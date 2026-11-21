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

    
    
}
