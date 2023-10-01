package com.example.backend.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

/**
 * Author: Zhepei Chen
 * Date: 2023/9/30
 */

@Configuration
@MapperScan("com.example.backend.mapper")
public class MyBatisPlusConfig {
}
