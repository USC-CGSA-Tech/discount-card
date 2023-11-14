package com.example.backend.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * Author: Zhepei Chen
 * Date: 2023/11/13
 */


public interface AWSService {
    String upload(MultipartFile photo);
}
