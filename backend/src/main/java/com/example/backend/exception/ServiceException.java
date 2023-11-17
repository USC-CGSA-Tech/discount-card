package com.example.backend.exception;

import lombok.Data;

/**
 * Author: Zhepei Chen
 * Date: 2023/11/14
 */


public class ServiceException extends RuntimeException{
    private String msg;
    private Integer code;

    public ServiceException(String msg){
        this.msg =msg;
        this.code = 500;
    }

    public ServiceException(Integer code, String msg){
        this.code = code; this.msg =msg;
    }
    public String getMsg() {
        return msg;
    }

    public void getMsg(String msg) {
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void getMsg(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
