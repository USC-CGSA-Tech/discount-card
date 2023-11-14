package com.example.backend.model.utils;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

/**
 * Author: Zhepei Chen
 * Date: 2023/10/1
 */


public class TimeUtils {
    private final String FORMAT = "yyyy-MM-dd HH:mm:ss";

    /**
     * 获取当前时间的hour小时后的时间
     * @param hour
     * @return
     */
    public static Date getHoursLater(int hour) {
        LocalDateTime currentTime = LocalDateTime.now();

        // hour小时后的时间
        LocalDateTime oneHourLater = currentTime.plusHours(hour);

        return convertToDate(oneHourLater);
    }

    private static Date convertToDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
    }
}
