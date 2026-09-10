package com.api.stock.service;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.api.stock.dto.EstoqueDTO;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;

@Service 

public class EstoqueService {

    @Autowired 
    private EstoqueRepository rep;

    public List<EstoqueDTO> getEstoque() {
        return rep.findAll().stream().map(EstoqueDTO::create).collect(Collectors.toList());
    }
}
