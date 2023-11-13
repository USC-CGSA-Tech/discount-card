package com.example.backend.service;


public interface LoginService {
    void insert(String username, String password);

    boolean login(String username, String password);
}
