package com.api.stock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.stock.dto.FornecedorDTO;
import com.api.stock.model.Fornecedor;

public interface FornecedorRepository  extends JpaRepository<Fornecedor, Long> {
    
    List<FornecedorDTO> getFornecedorById(Long id);
    
    List<FornecedorDTO> getFornecedorByEmail(String email);

    List<FornecedorDTO> getFornecedorByTelefone(String telefone);

    List<FornecedorDTO> getFornecedorByEndereco(String endereco);
}
