package com.api.stock.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EstoqueRepository extends JpaRepository<Estoque,Long> {
    List<Estoque> findByCategorias(String categorias);
    
}
