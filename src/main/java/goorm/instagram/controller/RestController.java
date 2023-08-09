package goorm.instagram.controller;

import goorm.instagram.domain.User;
import goorm.instagram.service.FirebaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@org.springframework.web.bind.annotation.RestController
@RequiredArgsConstructor
public class RestController {

    private final FirebaseService firebaseService;

    @PostMapping("/insertUser")
    public String insertUser(@RequestBody User user) throws Exception{
        return firebaseService.insertUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            User loggedInUser = firebaseService.loginUser(user.getEmail(), user.getPassword());
            if (loggedInUser != null) {
                return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Login failed!", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getUserDetail")
    public User getUserDetail(@RequestParam String id) throws Exception{
        return firebaseService.getUserDetail(id);
    }

    @GetMapping("/updateUser")
    public String updateUser(@RequestParam User user) throws Exception{
        return firebaseService.updateUser(user);
    }

    @GetMapping("/deleteUser")
    public String deleteUser(@RequestParam String id) throws Exception{
        return firebaseService.deleteUser(id);
    }
}
