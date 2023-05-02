package com.example.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Nation;
import com.example.backend.services.NationService;

@RestController
@RequestMapping("/api/v1/nations")
@CrossOrigin(origins = "*")
public class NationController {
    @Autowired
    private NationService service;

    @GetMapping("")
    public ResponseEntity<List<Nation>> getAllNations(){
        return ResponseEntity.ok(service.getAllNations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nation> getSingleNation(@PathVariable int id){
        return ResponseEntity.ok(service.getSingleNation(id));
    }

    @PostMapping("")
    public ResponseEntity<Nation> createNation(@RequestBody Nation nation){
        return new ResponseEntity<Nation>(service.createNation(nation), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nation> updateNation(@PathVariable int id, @RequestBody Nation nation){
        return ResponseEntity.ok(service.updateNation(id, nation));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteNation(@PathVariable int id){
        service.deleteNation(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
