package com.example.bodega.controller;



import com.example.bodega.exceptions.ResourcesNotFoundException;
import com.example.bodega.model.Deli;
import com.example.bodega.repository.DeliRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bodega/v1")
public class DeliController {

    @Autowired
    private DeliRepository deliRepository;



//  get all Deli


    @GetMapping("/deli")
    public List<Deli> getAllDeli(Model model) {

        return this.deliRepository.findAll();

    }



//  get all Deli by id

    @GetMapping("/deli/{id}")
    public ResponseEntity<Deli> getDeliById(@PathVariable(value = "id") Long deliId)
            throws ResourcesNotFoundException {
        Deli deli = deliRepository.findById(deliId)
                .orElseThrow(() -> new ResourcesNotFoundException("Deli not found for this id :: " + deliId));
        return ResponseEntity.ok().body(deli);
    }

//  save Deli

    @PostMapping("/deli")
    public Deli createDeli(@Valid @RequestBody Deli deli) {
        return deliRepository.save(deli);
    }

//  Update deli

    @PutMapping("/deli/{id}")
    public ResponseEntity<Deli> updateDeli(@PathVariable(value = "id") Long deliId,
                                             @Valid @RequestBody Deli deliDetails)
            throws ResourcesNotFoundException {
        Deli deli = deliRepository.findById(deliId)
                .orElseThrow(()-> new ResourcesNotFoundException("Deli not found for this id :: " + deliId));


//        employee.setEmail(snackDetails.getEmail());
        deli.setDeliName(deliDetails.getDeliName());
        deli.setDeliPrice(deliDetails.getDeliPrice());


        final Deli updatedDeli = deliRepository.save(deli);


        return ResponseEntity.ok(updatedDeli);

    }

//  Delete Snack

    @DeleteMapping("/Deli/{id}")
    public Map<String, Boolean> deletedDeli(@PathVariable(value = "id") Long deliId)
            throws ResourcesNotFoundException {
        Deli deli = deliRepository.findById(deliId)
                .orElseThrow(()-> new ResourcesNotFoundException("Deli not found for this id :: " + deliId));

        deliRepository.delete(deli);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted deli", Boolean.TRUE);

        return response;

    }


}
