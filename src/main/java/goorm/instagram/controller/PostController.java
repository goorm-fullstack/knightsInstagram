package goorm.instagram.controller;

import goorm.instagram.domain.Post;
import goorm.instagram.service.PostService;
import goorm.instagram.service.PostServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {

    private final PostServiceImpl postService;

    @PostMapping("/createPost")
    public String createPost(@RequestBody Post post){
        postService.createPost(post);
        return "redirect:/";
    }

    @DeleteMapping("/{documentId}") // 파라미터 이름을 documentId로 변경
    public ResponseEntity<String> deletePost(@PathVariable("documentId") String Id) {
        postService.deletePost(Id);
        return ResponseEntity.ok("success");
    }

    @GetMapping
    public ResponseEntity<Object> comments(Model model) throws ExecutionException, InterruptedException {
        List<Post> posts = postService.getAllPosts();
        model.addAttribute("Post", posts);
        return ResponseEntity.ok().body(posts);
    }
}