package com.api.stock.dto;

import lombok.Data;

import org.modelmapper.ModelMapper;

import com.api.stock.model.Estoque;

@Data 
public class EstoqueDTO {
    private Long id;
    private Double preco;
    private Long quantidade;
    private String name;
    private String categorias;
    private String produtos;

    public static EstoqueDTO create (Estoque e){
        ModelMapper modelmapper = new ModelMapper();
        return modelmapper.map(e, EstoqueDTO.class);
    }

}



