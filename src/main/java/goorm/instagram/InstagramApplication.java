package goorm.instagram;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.io.*;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class InstagramApplication {
	private static final ResourceLoader resourceLoader = new DefaultResourceLoader();
	public static final String DATABASE_URL = "https://knightsinstagram5.firebaseio.com";
	public static void main(String[] args) throws IOException {
		Resource resource = new ClassPathResource("key.json");
		SpringApplication.run(InstagramApplication.class, args);
	}
}