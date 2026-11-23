package com.api.stock.repository;

import com.api.stock.dto.ClienteDTO;
import com.api.stock.model.Cliente;

import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository  extends JpaRepository<Cliente, Long> {

    List<ClienteDTO> getClientById(Long id);
    
    List<ClienteDTO> getClientByEmail(String email);

    List<ClienteDTO> getClientByTelefone(String telefone);

    List<ClienteDTO> getClientByEndereco(String endereco);
    
}
