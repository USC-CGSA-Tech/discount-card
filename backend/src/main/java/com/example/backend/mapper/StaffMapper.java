package com.example.backend.mapper;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.backend.model.vo.BusinessVO;
import org.mapstruct.Mapper;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/1
 */

@Mapper
public interface StaffMapper extends BaseMapper<BusinessVO> {
    int insert(BusinessVO entity);
}
