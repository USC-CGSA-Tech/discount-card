package com.example.backend.model.common;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.example.backend.exception.ServiceException;
import com.example.backend.mapper.LoginMapper;
import com.example.backend.model.vo.UserVO;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Author: Zhepei Chen
 * Date: 2023/11/14
 */

//校验类
public class JwtInterceptor implements HandlerInterceptor {
    @Resource
    private LoginMapper loginMapper;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String token = request.getHeader("token"); // header传过来的参数
        if (token == null || token.isBlank()) {
            token = request.getParameter("token");
        }

        if (token == null || token.isBlank()) {
            throw new ServiceException(401, "请登录");
        }

        String userId;
        try {
            userId = JWT.decode(token).getAudience().get(0);
        } catch (JWTDecodeException e) {
            throw new ServiceException(401, "请登录");
        }

        UserVO user = loginMapper.selectById(Integer.valueOf(userId));
        if (user == null) {
            throw new ServiceException(401, "请登录");
        }

        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassword())).build();
        try {
            jwtVerifier.verify(token);
        } catch (JWTDecodeException e) {
            throw new ServiceException(401, "请登录");
        }

        return true;

    }

}
