package com.example.backend.controller;

import com.example.backend.model.Response.Response;
import com.example.backend.model.entity.BusinessEntity;
import com.example.backend.model.vo.BusinessVO;
import com.example.backend.service.StaffService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Author: Zhepei Chen
 * Date: 2023/9/30
 */

@RestController
@RequestMapping("/staff")
@CrossOrigin
@Api(tags = "后台管理")
public class StaffController {

    @Autowired
    private StaffService staffService;


    @ApiOperation("test")
    @GetMapping(value = "/test")
    public String test(){
        return "ok";
    }

    @ApiOperation("Insert Record")
    @PostMapping(value = "/insert")
    public Response insert(@RequestBody BusinessEntity business) {
        boolean res = staffService.insert(business);
        return Response.ok(res);
    }

    @ApiOperation("Delete Record")
    @DeleteMapping (value = "/del")
    public Response del(Long id) {
        staffService.del(id);
        return Response.ok();
    }

    @ApiOperation("Update Record")
    @PutMapping(value = "/update")
    public Response update(@RequestBody BusinessEntity entity) {
        staffService.update(entity);
        return Response.ok();
    }

    @ApiOperation("Get All Record")
    @GetMapping(value = "getAll")
    public Response getAll(@RequestParam(required = false,defaultValue = "1") Integer current,
                           @RequestParam(required = false,defaultValue = "10") Integer pageSize) {
        List<BusinessVO> list = staffService.getAll(current, pageSize);
        return Response.ok(list);
    }




}
