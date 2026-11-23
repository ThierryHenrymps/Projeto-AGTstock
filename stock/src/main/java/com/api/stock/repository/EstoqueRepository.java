package com.api.stock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.stock.model.Estoque;

public interface EstoqueRepository extends JpaRepository<Estoque,Long> {
    List<Estoque> findByCategorias(String categorias);
    List<Estoque> findByName(String name);

    List<Estoque> findByProduto(String produtos);
    
}

