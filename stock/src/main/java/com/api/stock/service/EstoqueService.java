package com.api.stock.service;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.api.stock.dto.EstoqueDTO;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;

@Service 

public class EstoqueService {

    @Autowired 
    private EstoqueRepository rep;

    public List<EstoqueDTO> getEstoque() {
        return rep.findAll().stream().map(EstoqueDTO::create).collect(Collectors.toList());
    }

    public EstoqueDTO getEstoqueById(Long id) {
        return rep.findById(id).map(EstoqueDTO::create).orElseThrow(() -> new ObjectNotFoundException("Produto nao encontrado no estoque", id));
    }

    public List<EstoqueDTO> getEstoqueByCategorias(String categorias){
        return rep.findByCategorias(categorias).stream().map(EstoqueDTO::create).collect(Collectors.toList());
    }

    public List<EstoqueDTO> getEstoqueByName(String name){
        return rep.findByName(name).stream().map(EstoqueDTO::create).collect(Collectors.toList());
    }
    
    public List<EstoqueDTO> getEstoqueByProdutos(String produtos){
        return rep.findByProdutos(produtos).stream().map(EstoqueDTO::create).collect(Collectors.toList());
    }

    public Estoque salvar(Estoque estoque){
        return rep.save(estoque);
    }
}