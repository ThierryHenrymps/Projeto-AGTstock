package com.api.stock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.api.stock.dto.EstoqueDTO;
import com.api.stock.service.EstoqueService;

@Service 
@RestController 
@RequestMapping("/api/v1/estoque")

public class EstoqueController {
    
    @Autowired 
    private EstoqueService service;
    

    @GetMapping
    ResponseEntity<List<EstoqueDTO>> get(){
        return ResponseEntity.ok(service.getEstoque());
    }

}
