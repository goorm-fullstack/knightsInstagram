package goorm.instagram.signup.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
public class SignUp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String name;
    private String userId; // 사용자 이름
    private String password;

    @Builder
    public SignUp(String email, String name, String userId, String password){
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.password = password;
    }

}
