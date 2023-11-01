package com.example.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.backend.model.vo.BusinessVO;
import com.example.backend.model.vo.UserVO;
import org.mapstruct.Mapper;

@Mapper
public interface LoginMapper extends BaseMapper<UserVO> {
    int insert(UserVO entity);
}
