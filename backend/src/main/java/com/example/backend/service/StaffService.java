package com.example.backend.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.backend.model.entity.BusinessEntity;
import com.example.backend.model.entity.UpdateBusinessEntity;
import com.example.backend.model.vo.BusinessVO;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface StaffService {
    boolean insert(BusinessEntity business);

    void del(Long id);

    void update(UpdateBusinessEntity entity);

    List<BusinessVO> getAll(Integer index, Integer pageSize);
}
