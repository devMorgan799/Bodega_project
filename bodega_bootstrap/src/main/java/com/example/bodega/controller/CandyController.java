package com.example.bodega.controller;



import com.example.bodega.exceptions.ResourcesNotFoundException;
import com.example.bodega.model.Candy;
import com.example.bodega.repository.CandyRepository;
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
public class CandyController {

    @Autowired
    private CandyRepository candyRepository;



//  get all candies


    @GetMapping("/candy")
    public List<Candy> getAllCandies(Model model) {

        return this.candyRepository.findAll();

    }



//  get all candy by id

    @GetMapping("/candy/{id}")
    public ResponseEntity<Candy> getCandyById(@PathVariable(value = "id") Long candyId)
            throws ResourcesNotFoundException {
        Candy candy = candyRepository.findById(candyId)
                .orElseThrow(() -> new ResourcesNotFoundException("candy not found for this id :: " + candyId));
        return ResponseEntity.ok().body(candy);
    }

//  save candy

    @PostMapping("/candy")
    public Candy createCandy(@Valid @RequestBody Candy candy) {
        return candyRepository.save(candy);
    }

//  Update Employee

    @PutMapping("/candy/{id}")
    public ResponseEntity<Candy> updateCandy(@PathVariable(value = "id") Long candyId,
                                             @Valid @RequestBody Candy candyDetails)
            throws ResourcesNotFoundException {
        Candy candy = candyRepository.findById(candyId)
                .orElseThrow(()-> new ResourcesNotFoundException("candy not found for this id :: " + candyId));


//        employee.setEmail(candyDetails.getEmail());
        candy.setCandyName(candyDetails.getCandyName());
        candy.setCandyPrice(candyDetails.getCandyPrice());


        final Candy updatedCandy = candyRepository.save(candy);


        return ResponseEntity.ok(updatedCandy);

    }

//  Delete candy

    @DeleteMapping("/candy/{id}")
    public Map<String, Boolean> deletedCandy(@PathVariable(value = "id") Long candyId)
            throws ResourcesNotFoundException {
        Candy candy = candyRepository.findById(candyId)
                .orElseThrow(()-> new ResourcesNotFoundException("Candy not found for this id :: " + candyId));

        candyRepository.delete(candy);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted candy", Boolean.TRUE);

        return response;

    }


}
