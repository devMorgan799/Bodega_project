package com.example.bodega.controller;



import com.example.bodega.exceptions.ResourcesNotFoundException;
import com.example.bodega.model.CleaningSupply;
import com.example.bodega.repository.CleaningSupplyRepository;
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
public class CleaningSupplyController {

    @Autowired
    private CleaningSupplyRepository CleaningSupplyRepository;



//  get all CleaningSupply


    @GetMapping("/cleaningsupply")
    public List<CleaningSupply> getAllCleaningSupply(Model model) {

        return this.CleaningSupplyRepository.findAll();

    }



//  get all cleaningsupply by id

    @GetMapping("/cleaningsupply/{id}")
    public ResponseEntity<CleaningSupply> getCleaningSupplyById(@PathVariable(value = "id") Long cleaningsupplyId)
            throws ResourcesNotFoundException {
        CleaningSupply cleaningsupply = CleaningSupplyRepository.findById(cleaningsupplyId)
                .orElseThrow(() -> new ResourcesNotFoundException("cleaning supplies not found for this id :: " + cleaningsupplyId));
        return ResponseEntity.ok().body(cleaningsupply);
    }

//  save cleaningsupply

    @PostMapping("/cleaningsupply")
    public CleaningSupply createCleaningSupply(@Valid @RequestBody CleaningSupply cleaningsupply) {
        return CleaningSupplyRepository.save(cleaningsupply);
    }

//  Update CleaningSupply

    @PutMapping("/cleaningsupply/{id}")
    public ResponseEntity<CleaningSupply> updateCleaningSupply(@PathVariable(value = "id") Long cleaningsupplyId,
                                                               @Valid @RequestBody CleaningSupply cleaningsupplyDetails)
            throws ResourcesNotFoundException {
        CleaningSupply cleaningsupply = CleaningSupplyRepository.findById(cleaningsupplyId)
                .orElseThrow(()-> new ResourcesNotFoundException("CleaningSupplies not found for this id :: " + cleaningsupplyId));


//        employee.setEmail(cleaningsuppliesDetails.getEmail());
        cleaningsupply.setCleaningSupplyName(cleaningsupplyDetails.getCleaningSupplyName());
        cleaningsupply.setCleaningSupplyPrice(cleaningsupplyDetails.getCleaningSupplyPrice());


        final CleaningSupply updatedCleaningSupply = CleaningSupplyRepository.save(cleaningsupply);


        return ResponseEntity.ok(updatedCleaningSupply);

    }

//  Delete cleaningsupply

    @DeleteMapping("/cleaningsupply/{id}")
    public Map<String, Boolean> deletedCleaningSupply(@PathVariable(value = "id") Long cleaningsupplyId)
            throws ResourcesNotFoundException {
        CleaningSupply cleaningsupply = CleaningSupplyRepository.findById(cleaningsupplyId)
                .orElseThrow(()-> new ResourcesNotFoundException("CleaningSupply not found for this id :: " + cleaningsupplyId));

        CleaningSupplyRepository.delete(cleaningsupply);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted cleaningsupply", Boolean.TRUE);

        return response;

    }


}

