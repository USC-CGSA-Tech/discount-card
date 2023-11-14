package com.example.backend.service;


import com.example.backend.model.dto.UserDTO;


public interface LoginService {
    void insert(String username, String password);

    UserDTO login(String username, String password);
}
