package com.example.backend.services;

import java.util.List;

import com.example.backend.models.Nation;

public interface NationService {
    List<Nation> getAllNations();
    Nation getSingleNation(int id);
    Nation createNation(Nation nation);
    Nation updateNation(int id, Nation nation);
    void deleteNation(int id);
}
