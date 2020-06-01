package com.example.bodega.controller;



import com.example.bodega.exceptions.ResourcesNotFoundException;
import com.example.bodega.model.Snack;
import com.example.bodega.repository.SnackRepository;
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
public class SnackController {

    @Autowired
    private SnackRepository snackRepository;



//  get all Snacks


    @GetMapping("/snack")
    public List<Snack> getAllSnack(Model model) {

        return this.snackRepository.findAll();

    }



//  get all Snacks by id

    @GetMapping("/snack/{id}")
    public ResponseEntity<Snack> getSnackById(@PathVariable(value = "id") Long snackId)
            throws ResourcesNotFoundException {
        Snack snack = snackRepository.findById(snackId)
                .orElseThrow(() -> new ResourcesNotFoundException("Snack not found for this id :: " + snackId));
        return ResponseEntity.ok().body(snack);
    }

//  save Snack

    @PostMapping("/snack")
    public Snack createSnack(@Valid @RequestBody Snack snack) {
        return snackRepository.save(snack);
    }

//  Update snacks

    @PutMapping("/snack/{id}")
    public ResponseEntity<Snack> updateSnack(@PathVariable(value = "id") Long snackId,
                                             @Valid @RequestBody Snack snackDetails)
            throws ResourcesNotFoundException {
        Snack snack = snackRepository.findById(snackId)
                .orElseThrow(()-> new ResourcesNotFoundException("Snack not found for this id :: " + snackId));


//        employee.setEmail(snackDetails.getEmail());
        snack.setSnackName(snackDetails.getSnackName());
        snack.setSnackPrice(snackDetails.getSnackPrice());


        final Snack updatedSnack = snackRepository.save(snack);


        return ResponseEntity.ok(updatedSnack);

    }

//  Delete Snack

    @DeleteMapping("/snack/{id}")
    public Map<String, Boolean> deletedSnack(@PathVariable(value = "id") Long snackId)
            throws ResourcesNotFoundException {
        Snack snack = snackRepository.findById(snackId)
                .orElseThrow(()-> new ResourcesNotFoundException("Snack not found for this id :: " + snackId));

        snackRepository.delete(snack);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted snack", Boolean.TRUE);

        return response;

    }


}
