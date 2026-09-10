package com.api.stock.dto;

import lombok.Data;
import com.api.stock.service.Estoque;
import org.modelmapper.ModelMapper;

@Data 
public class EstoqueDTO {
    private Long id;
    private Double preco;
    private Long quantidade;
    private String name;
    private String categorias;

    public static EstoqueDTO create (Estoque e){
        ModelMapper modelmapper = new ModelMapper();
        return modelmapper.map(e, EstoqueDTO.class);
    }

}



