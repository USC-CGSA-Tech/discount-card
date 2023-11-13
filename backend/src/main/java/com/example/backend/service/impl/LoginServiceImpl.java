package com.example.backend.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.example.backend.exception.CustomException;
import com.example.backend.mapper.LoginMapper;
import com.example.backend.model.vo.UserVO;
import com.example.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/31
 */

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginMapper mapper;

    @Override
    public void insert(String username, String password) {
        if ((username == null || username.isEmpty())||(password == null || password.isEmpty())) {
            throw new CustomException("用户名密码不能为空");
        }
        LambdaQueryWrapper<UserVO> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserVO::getUsername, username);

        Long count = mapper.selectCount(wrapper);

        if (count > 0) {
            throw new CustomException("该用户名已存在");
        }

        UserVO vo = new UserVO();
        vo.setAccessLevel(2);
        vo.setPassword(password);
        vo.setUsername(username);

        mapper.insert(vo);
    }

    @Override
    public boolean login(String username, String password) {
        if ((username == null || username.isEmpty())||(password == null || password.isEmpty())) {
            throw new CustomException("用户名密码不能为空");
        }

        LambdaQueryWrapper<UserVO> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserVO::getUsername, username).eq(UserVO::getPassword, password);
        Long count = mapper.selectCount(wrapper);

        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }
}
