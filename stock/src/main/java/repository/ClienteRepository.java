package repository;

import com.api.stock.dto.ClienteDTO;
import com.api.stock.model.Cliente;

import org.jspecify.annotations.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository  extends JpaRepository<Cliente, Long> {

	ClienteDTO getClientById(Long id);

    @Nullable
    Object getClientes();
    
    
}
