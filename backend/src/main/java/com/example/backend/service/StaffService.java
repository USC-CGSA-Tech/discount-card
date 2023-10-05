package com.example.backend.service;

import com.example.backend.model.entity.BusinessEntity;
import com.example.backend.model.vo.BusinessVO;

import java.util.List;

public interface StaffService {
    boolean insert(BusinessEntity business);

    void del(Long id);

    void update(BusinessEntity entity);

    List<BusinessVO> getAll(Integer index, Integer pageSize);
}
