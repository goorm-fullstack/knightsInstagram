package goorm.instagram.firebase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/firestore")
public class FirestoreController {
    @Autowired
    private FirestoreService firestoreService;

    @PostMapping("/user")
    public void addUser(
            @RequestParam String id,
            @RequestParam String first,
            @RequestParam(required = false) String middle,
            @RequestParam String last,
            @RequestParam long born) {
        firestoreService.addUser(id, first, middle, last, born);
    }

    @GetMapping("/users")
    public void getAllUsers() {
        firestoreService.getAllUsers();
    }
}
