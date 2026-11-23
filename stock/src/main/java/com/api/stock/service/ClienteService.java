package com.api.stock.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.stock.repository.ClienteRepository;

@Service 
public class ClienteService {
    
    @Autowired 
    private ClienteRepository clienteRepository;
}
