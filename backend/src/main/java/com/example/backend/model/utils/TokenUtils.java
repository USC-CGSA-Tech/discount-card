package com.example.backend.model.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.backend.mapper.LoginMapper;
import com.example.backend.model.vo.UserVO;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Author: Zhepei Chen
 * Date: 2023/11/14
 */

@Component
public class TokenUtils {

    private static LoginMapper staticLoginMapper;

    @Resource
    LoginMapper loginMapper;

    @PostConstruct
    public void setUserService() {
        staticLoginMapper = loginMapper;
    }

    public static String createToken(String userId, String sign) {
        return JWT.create().withAudience(userId)
                .withExpiresAt(TimeUtils.getHoursLater(1)) // 一小时后token过期
                .sign(Algorithm.HMAC256(sign)); // 以password作为token的密钥
    }

    public static UserVO getCurrentUser() {
        try {
            HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
            String token = request.getHeader("token");
            if (!token.isBlank()) {
                String userId = JWT.decode(token).getAudience().get(0);
                return staticLoginMapper.selectById(Integer.valueOf(userId));
            }
        } catch (Exception e) {
            return null;
        }
        return null;
    }
}
