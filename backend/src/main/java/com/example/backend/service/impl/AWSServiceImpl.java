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

    private String FolderName = "upload/";

    private String endpoint = "s3://discount-card/upload/"; //"https://s3-us-west-2.amazonaws.com";"s3://discount-card/upload/";
    @Override
    public String upload(MultipartFile photo) {
        String tempFileName = photo.getOriginalFilename();
        String originalFileName = photo.getOriginalFilename();
        String contentType = photo.getContentType();
        long fileSize = photo.getSize();
        String dateDir = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        String tempBucketName = FolderName + UUID.randomUUID().toString()+ "_" + dateDir;
        String filePath = tempBucketName +"/"+ tempFileName;
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(contentType);
        objectMetadata.setContentLength(fileSize);
        try {

            PutObjectResult putObjectResult = s3.putObject(tempBucketName, tempFileName, photo.getInputStream(), objectMetadata);
            //文件权限,设置为公共读
            s3.setObjectAcl(tempBucketName, tempFileName, CannedAccessControlList.PublicRead);
        } catch (AmazonServiceException e) {
            System.out.println(e.getErrorMessage());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return endpoint + "/" + filePath;
    }

    /*@PostConstruct
    public void init() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(accessKeyId, secretAccessKey);

        s3 =  AmazonS3ClientBuilder
                .standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

    }*/
}
