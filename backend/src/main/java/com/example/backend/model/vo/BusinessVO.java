package com.example.backend.model.vo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/1
 */

@Data
@TableName("business")
public class BusinessVO {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
    private String name;
    private String telephone;
    private String type;
    private String tag;
    private String wechat;
    private String email;
    private String address;
    private String description;
    private String promotion;
    private String imageUrl;
    private String releaseTime;
    private String createdAt;
    private String updatedAt;
    private Integer isDeleted;
}
