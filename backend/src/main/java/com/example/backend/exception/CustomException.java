package com.example.backend.exception;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/31
 */

public class CustomException extends RuntimeException{
    private String msg;

    public CustomException(String msg){
        this.msg =msg;
    }
    public String getMsg() {
        return msg;
    }

    public void getMsg(String msg) {
        this.msg = msg;
    }
}
