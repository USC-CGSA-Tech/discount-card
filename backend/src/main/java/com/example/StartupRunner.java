package com.example;
import com.example.mapper.BusinessMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartupRunner implements CommandLineRunner {

    private final BusinessMapper businessMapper;

    public StartupRunner(BusinessMapper businessMapper) {
        this.businessMapper = businessMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("StartupRunner is being executed!");
        businessMapper.createBusinessTable();

    }
}
