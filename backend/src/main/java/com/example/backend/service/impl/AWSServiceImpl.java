package com.example.backend.service.impl;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.ClientConfiguration;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.example.backend.exception.CustomException;
import com.example.backend.service.AWSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

/**
 * Author: Zhepei Chen
 * Date: 2023/11/13
 */

@Service
public class AWSServiceImpl implements AWSService {
    @Autowired
    AmazonS3 s3 = null;

    @Value("${aws.s3.bucketName}")
    private String bucketName;

    @Value("${aws.s3.accessKeyId}")
    private String accessKeyId;

    @Value("${aws.s3.secretAccessKey}")
    private String secretAccessKey;

    @Value("${aws.region}")
    private String region;

    @Value("${aws.s3.folderName}")
    private String folderName;

    @Override
    public String upload(MultipartFile photo) {
        s3 = amazonS3();
        String dateDir = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        String contentType = photo.getContentType();
        String originalFile = photo.getOriginalFilename();
        String tempFileName = UUID.randomUUID().toString() + "_" +  originalFile ;
        long fileSize = photo.getSize();

        String tempBucketName = bucketName + folderName;
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(contentType);
        objectMetadata.setContentLength(fileSize);
        try {
            PutObjectResult putObjectResult = s3.putObject(tempBucketName, tempFileName, photo.getInputStream(), objectMetadata);
        } catch (AmazonServiceException e) {
            throw new CustomException(e.getErrorMessage());
        } catch (IOException e) {
            throw new CustomException(e.getMessage());
        }
        return "https://" + bucketName + ".s3.amazonaws.com" + folderName + "/" + tempFileName;
    }

    private AmazonS3 amazonS3() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(accessKeyId, secretAccessKey);
        AmazonS3ClientBuilder builder = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(awsCredentials));
        //设置S3的地区
        builder.setRegion(region);
        AmazonS3 s3Client = builder.build();
        return s3Client;
    }
}
