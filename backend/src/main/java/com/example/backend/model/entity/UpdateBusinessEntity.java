package com.example.backend.model.entity;

import io.swagger.annotations.ApiParam;
import lombok.Data;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/1
 */

@Data
public class UpdateBusinessEntity {
    @ApiParam(value = "id")
    private Long id;
    @ApiParam(value = "商家名")
    private String name;

    @ApiParam(value = "电话")
    private String telephone;

    @ApiParam(value = "微信")
    private String wechat;

    @ApiParam(value = "邮件")
    private String email;

    @ApiParam(value = "商家地址")
    private String address;

    @ApiParam(value = "商家描述")
    private String description;

    private String promotion;

    @ApiParam(value = "商家照片")
    private String imageUrl;
}
