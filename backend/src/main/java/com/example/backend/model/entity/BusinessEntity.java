package com.example.backend.model.entity;

import io.swagger.annotations.ApiParam;
import lombok.Data;

import java.util.Date;

/**
 * Author: Zhepei Chen
 * Date: 2023/9/30
 */

@Data
public class BusinessEntity {
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

    @ApiParam(value = "上线时间")
    private String releaseTime;

    @ApiParam(value = "商家照片")
    private String imageUrl;

}
