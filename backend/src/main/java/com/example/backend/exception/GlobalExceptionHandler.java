package com.example.backend.exception;

import com.example.backend.model.Response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;


/**
 * Author: Zhepei Chen
 * Date: 2023/10/31
 */

@ControllerAdvice(basePackages = "com.example.backend.controller")
public class GlobalExceptionHandler {

    private  static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Response error(HttpServletRequest request, Exception e){
        log.error("异常信息: ", e);
        return Response.fail("系统异常");
    }

    @ExceptionHandler(CustomException.class)
    @ResponseBody
    public Response customError(HttpServletRequest request, CustomException e){
        return Response.fail(e.getMsg());
    }
}
