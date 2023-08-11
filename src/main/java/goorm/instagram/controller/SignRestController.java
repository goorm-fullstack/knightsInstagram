package goorm.instagram.controller;

import goorm.instagram.domain.User;
import goorm.instagram.service.SignFirebaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class SignRestController {

    private final SignFirebaseService signFirebaseService;

    // 회원가입
    @PostMapping("/insertUser")
    public String insertUser(@RequestBody User user) throws Exception{
        return signFirebaseService.insertUser(user);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            User loggedInUser = signFirebaseService.loginUser(user.getEmail(), user.getPassword());
            if (loggedInUser != null) {
                return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Login failed!", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 회원 삭제
    @DeleteMapping("/deleteUser")
    public String deleteUser(@RequestParam String email) throws Exception{
        return signFirebaseService.deleteUser(email);
    }

    // 회원 수정
    @PutMapping("/updateUser")
    public String updateUser(@RequestBody User user) throws Exception{
        return signFirebaseService.updateUser(user);
    }
}
