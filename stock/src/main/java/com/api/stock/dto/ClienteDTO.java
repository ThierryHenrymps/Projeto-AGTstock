package com.api.stock.dto;

import lombok.Data;

import org.modelmapper.ModelMapper;

import com.api.stock.model.Estoque;

@Data

public class ClienteDTO{

    private Long id;
    private String nome;
    private String cpf;
    private String telefone;
    private String email;
    private String endereco;
    @Column(name = "data_cadastro", updatable = false)
    private LocalDateTime dataCadastro;

    public static ClienteDTO create (Cliente c){
        ModelMapper modelmapper = new ModelMapper();
        return modelmapper.map(c, ClienteDTO.class);

    }
}