package goorm.instagram.controller;

import goorm.instagram.domain.Comment;
import goorm.instagram.service.CommentServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {

    private final CommentServiceImpl commentService;

    /**
     * 전체 댓글 목록
     *
     * @param model
     * @return
     * @throws ExecutionException
     * @throws InterruptedException
     */
    @GetMapping
    public String comments(Model model) throws ExecutionException, InterruptedException {
//    public ResponseEntity<Object> comments(Model model) throws ExecutionException, InterruptedException {
        List<Comment> comments = commentService.getAllComments();
        model.addAttribute("comments", comments);
        return "comment/comments";
//        return ResponseEntity.ok().body(comments);
    }

    /**
     * 댓글 작성
     *
     * @return
     */
    @PostMapping("/add")
    public String addComment(Comment comment) {
        commentService.addComment(comment);
        return "redirect:/";
    }

    /**
     * 댓글 수정
     *
     * @param id
     * @param updateContent
     * @return
     */
    @PostMapping("/update/{id}")
    public String updateComment(@PathVariable("id") String id, Comment comment) {
        commentService.updateComment(id, comment);
        return "redirect:/";
    }

    /**
     * 댓글 삭제
     *
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    public String deleteComment(@PathVariable("id") String id) {
        commentService.deleteComment(id);
        return "redirect:/";
    }

}
