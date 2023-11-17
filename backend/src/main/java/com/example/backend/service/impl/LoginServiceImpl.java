package com.example.backend.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.example.backend.exception.CustomException;
import com.example.backend.exception.ServiceException;
import com.example.backend.mapper.LoginMapper;
import com.example.backend.model.dto.UserDTO;
import com.example.backend.model.utils.TokenUtils;
import com.example.backend.model.vo.UserVO;
import com.example.backend.service.LoginService;
import org.springframework.beans.BeanUtils;
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
    public UserDTO login(String username, String password) {
        if ((username == null || username.isEmpty())||(password == null || password.isEmpty())) {
            throw new CustomException("用户名密码不能为空");
        }

        LambdaQueryWrapper<UserVO> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserVO::getUsername, username);
        UserVO user = mapper.selectOne(wrapper);
        if (user == null) {
            throw new ServiceException("用户名或密码错误");
        }
        if (!user.getPassword().equals(password)) {
            throw new ServiceException("用户名或密码错误");
        }
        String token = TokenUtils.createToken(user.getId().toString(), user.getPassword());
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO);
        userDTO.setToken(token);
        return userDTO;
    }
}
