package com.api.stock.dto;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;

import com.api.stock.model.Cliente;
import com.api.stock.model.Fornecedor;

public class FornecedorDTO {
    

    private Long id;
    private String nome;
    private String cnpj;
    private String telefone;
    private String email;
    private String endereco;
    private LocalDateTime dataCadastro;

    public static FornecedorDTO create(Fornecedor f) {
    ModelMapper modelmapper = new ModelMapper();
    return modelmapper.map(f, FornecedorDTO.class);
    }
}
