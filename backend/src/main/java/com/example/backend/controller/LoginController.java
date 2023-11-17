package com.example.backend.controller;

import com.example.backend.model.Response.Response;
import com.example.backend.model.dto.UserDTO;
import com.example.backend.service.LoginService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/31
 */

@RestController
@RequestMapping("/login")
@CrossOrigin
@Api(tags = "登录界面")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @ApiOperation("创建用户")
    @PostMapping (value = "/insert")
    public Response insert(@ApiParam(name = "username", value = "用户名") @RequestParam String username,
                           @ApiParam(name = "password", value = "密码") @RequestParam String password) {
        loginService.insert(username, password);
        return Response.ok();
    }

    @ApiOperation("用户登录")
    @PostMapping (value = "/login")
    public Response login(@ApiParam(name = "username", value = "用户名") @RequestParam String username,
                        @ApiParam(name = "password", value = "密码") @RequestParam String password) {
        UserDTO vo = loginService.login(username, password);
        return Response.ok(vo);

    }


}
