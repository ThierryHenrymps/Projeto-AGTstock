package com.api.stock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.stock.dto.ClienteDTO;

import repository.ClienteRepository;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1/clientes")

public class ClienteController {

    @Autowired
    private ClienteRepository service;

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> get() {
        return ResponseEntity.ok(service.getClientes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> getById(@RequestParam ("id") Long id) {
        ClienteDTO cliente = service.getClientById(id);
        return ResponseEntity.ok().build();
    }
    
}
