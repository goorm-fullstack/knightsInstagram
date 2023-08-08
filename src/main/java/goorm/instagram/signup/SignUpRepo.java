package goorm.instagram.signup;

import goorm.instagram.signup.domain.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignUpRepo extends JpaRepository<SignUp, Long>{
}