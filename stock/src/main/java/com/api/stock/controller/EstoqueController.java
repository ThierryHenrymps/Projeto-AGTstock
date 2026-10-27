package com.api.stock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.api.stock.dto.EstoqueDTO;
import com.api.stock.service.EstoqueService;


@RestController 
@RequestMapping("/api/v1/estoque")

public class EstoqueController {
    
    @Autowired 
    private EstoqueService service;
    

    @GetMapping
    public ResponseEntity<List<EstoqueDTO>> get(){
        return ResponseEntity.ok(service.getEstoque());
    }

    @GetMapping("/{id}")
    public ResponseEntity get(@PathVariable("id") Long id) {
        EstoqueDTO estoque = service.getEstoqueById(id);

        return ResponseEntity.ok(estoque);
    }

    @GetMapping("/categorias/{categorias}")
    public ResponseEntity <List<EstoqueDTO>>getByCategorias(@PathVariable ("categorias") String categorias) {
        List<EstoqueDTO> estoque = service.getEstoqueByCategorias(categorias);

        return estoque.isEmpty()?
        ResponseEntity.noContent().build():
        ResponseEntity.ok(estoque);
    }

    @GetMapping("/nome/{name}")
    public ResponseEntity <List<EstoqueDTO>>getByName(@PathVariable ("name") String name) {
        List<EstoqueDTO> estoque = service.getEstoqueByName(name);

        return estoque.isEmpty()?
        ResponseEntity.noContent().build():
        ResponseEntity.ok(estoque);
    }

    @GetMapping("/produto/{produto}")
    public ResponseEntity <List<EstoqueDTO>>getByProdutos(@PathVariable ("produtos") String produtos) {
        List<EstoqueDTO> estoque = service.getEstoqueByProdutos(produtos);

        return estoque.isEmpty()? 
        ResponseEntity.noContent().build(): ResponseEntity.ok(estoque);
    }

    @PostMapping
    public ResponseEntity<Estoque> salvar(@Valid @RequestBody Estoque estoque) {
        Estoque estoqueSalvo = service.salvar(estoque);

        if(estoqueSalvo == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(201).body(estoqueSalvo);
    }


}
