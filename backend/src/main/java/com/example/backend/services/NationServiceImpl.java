package com.example.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.models.Nation;
import com.example.backend.repositories.NationRepository;

@Service
public class NationServiceImpl implements NationService{
    @Autowired
    private NationRepository repository;

    @Override
    public List<Nation> getAllNations() {
        return repository.findAll();
    }

    @Override
    public Nation getSingleNation(int id) {
        Optional<Nation> nation = repository.findById(id);
        if (nation.isPresent()) return nation.get();
        throw new RuntimeException(); 
    }

    @Override
    public Nation createNation(Nation nation) {
        return repository.save(nation);
    }

    @Override
    public Nation updateNation(int id, Nation nation) {
        nation.setId(id);
        return repository.save(nation);
    }

    @Override
    public void deleteNation(int id) {
        repository.deleteById(id);
        
    }
}
