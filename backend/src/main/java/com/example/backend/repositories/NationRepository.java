package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.models.Nation;

public interface NationRepository extends JpaRepository<Nation, Integer>{
    
}
