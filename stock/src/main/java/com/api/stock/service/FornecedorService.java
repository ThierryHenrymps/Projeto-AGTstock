package com.api.stock.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.stock.repository.FornecedorRepository;

@Service 
public class FornecedorService {

    @Autowired 
    private FornecedorRepository fornecedorRepository;
    
}
