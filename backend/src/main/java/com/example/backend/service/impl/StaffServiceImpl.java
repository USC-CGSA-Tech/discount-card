package com.example.backend.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.backend.exception.CustomException;
import com.example.backend.mapper.StaffMapper;
import com.example.backend.model.entity.BusinessEntity;
import com.example.backend.model.vo.BusinessVO;
import com.example.backend.service.StaffService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/1
 */

@Service
public class StaffServiceImpl implements StaffService {


    @Autowired
    private StaffMapper mapper;
    @Override
    public boolean insert(BusinessEntity business) {
        if (business == null) {
            throw new NullPointerException();
        }
        BusinessVO vo = new BusinessVO();

        BeanUtils.copyProperties(business, vo);

        int isDeleted = 0;
        vo.setIsDeleted(isDeleted);
        int res = 0;
        if (vo != null) {
            res = mapper.insert(vo);
        }

        if (res == 1) {
            return true;
        }  else {
            return false;
        }

    }

    @Override
    public void del(Long id) {
        BusinessVO vo = new BusinessVO();
        vo.setId(id);
        vo.setIsDeleted(1);

        mapper.updateById(vo);

    }

    @Override
    public void update(BusinessEntity entity) {
        BusinessVO vo = new BusinessVO();
        BeanUtils.copyProperties(entity, vo);

        mapper.updateById(vo);

    }

    @Override
    public List<BusinessVO> getAll(Integer index, Integer pageSize) {
        Page<BusinessVO> page = Page.of(index, pageSize);
        LambdaQueryWrapper<BusinessVO> wrapper = new LambdaQueryWrapper<>();
        List<BusinessVO> list = mapper.selectPage(page , wrapper).getRecords();
        return list;
    }
}
