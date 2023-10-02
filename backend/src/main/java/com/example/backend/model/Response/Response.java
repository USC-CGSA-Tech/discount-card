package com.example.backend.model.Response;

import lombok.Data;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/1
 */


@Data
public class Response {

    private Object data;
    private Integer code;
    private String message;

    public Response(Object data, Integer code, String message) {
        this.data = data;
        this.code = code;
        this.message = message;
    }
    public static Response ok(Object data) {
        return new Response(data,200," success");
    }

    public static Response ok() {
        return new Response(null, 200,"success");
    }
    public static Response ok(Object data, Integer code, String message) {
        return new Response(data,code,message);
    }
    public static Response fail(Object data, Integer code, String message) {
        return new Response(data,code,message);
    }
}