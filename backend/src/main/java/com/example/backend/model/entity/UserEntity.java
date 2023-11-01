package com.example.backend.model.entity;

import io.swagger.annotations.ApiParam;
import lombok.Data;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/31
 */

@Data
public class UserEntity {
    @ApiParam(value = "用户名")
    private String username;

    @ApiParam(value = "密码")
    private String password;

}
