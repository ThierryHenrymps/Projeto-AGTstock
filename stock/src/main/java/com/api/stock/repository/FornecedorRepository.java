package com.api.stock.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.stock.model.Fornecedor;

public interface FornecedorRepository  extends JpaRepository<Fornecedor, Long> {
    
}
