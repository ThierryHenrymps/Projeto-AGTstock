package com.api.stock.service;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity 
@EqualsAndHashCode 
@NoArgsConstructor 
@AllArgsConstructor 
@Getter 
@Setter 

public class Estoque {

    @Id
    private Long id;
    private Long quantidade;
    private Double preco;
    private String name;
    private String categorias;
    
        
}
