package com.example.bodega.controller;



import com.example.bodega.exceptions.ResourcesNotFoundException;
import com.example.bodega.model.Beverage;
import com.example.bodega.repository.BeverageRepository;
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
public class BeverageController {

    @Autowired
    private BeverageRepository beverageRepository;



//  get all Beverages


    @GetMapping("/beverage")
    public List<Beverage> getAllBeverages(Model model) {

        return this.beverageRepository.findAll();

    }



//  get all Beverage by id

    @GetMapping("/beverage/{id}")
    public ResponseEntity<Beverage> getBeverageById(@PathVariable(value = "id") Long beverageId)
            throws ResourcesNotFoundException {
        Beverage beverage = beverageRepository.findById(beverageId)
                .orElseThrow(() -> new ResourcesNotFoundException("Beverage not found for this id :: " + beverageId));
        return ResponseEntity.ok().body(beverage);
    }

//  save candy

    @PostMapping("/beverage")
    public Beverage createBeverage(@Valid @RequestBody Beverage beverage) {
        return beverageRepository.save(beverage);
    }

//  Update Beverage

    @PutMapping("/beverage/{id}")
    public ResponseEntity<Beverage> updateBeverage(@PathVariable(value = "id") Long beverageId,
                                             @Valid @RequestBody Beverage beverageDetails)
            throws ResourcesNotFoundException {
        Beverage beverage = beverageRepository.findById(beverageId)
                .orElseThrow(()-> new ResourcesNotFoundException("Beverage not found for this id :: " + beverageId));


//        employee.setEmail(candyDetails.getEmail());
        beverage.setBeverageName(beverageDetails.getBeverageName());
        beverage.setBeveragePrice(beverageDetails.getBeveragePrice());


        final Beverage updatedBeverage = beverageRepository.save(beverage);


        return ResponseEntity.ok(updatedBeverage);

    }

//  Delete Beverage

    @DeleteMapping("/beverage/{id}")
    public Map<String, Boolean> deletedBeverage(@PathVariable(value = "id") Long beverageId)
            throws ResourcesNotFoundException {
        Beverage beverage = beverageRepository.findById(beverageId)
                .orElseThrow(()-> new ResourcesNotFoundException("Beverage not found for this id :: " + beverageId));

        beverageRepository.delete(beverage);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted beverage", Boolean.TRUE);

        return response;

    }


}
