package com.example.backend.model.dto;

import lombok.Data;

/**
 * Author: Zhepei Chen
 * Date: 2023/11/14
 */

@Data
public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private Integer accessLevel;
    private String Token;
}
