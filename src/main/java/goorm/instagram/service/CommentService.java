package goorm.instagram.service;

import goorm.instagram.domain.Comment;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface CommentService {

    List<Comment> getAllComments() throws ExecutionException, InterruptedException; // 전체 댓글 목록

    Comment addComment(Comment comment); // 댓글 작성

    void updateComment(String id, Comment comment); // 댓글 수정

    void deleteComment(String id); // 댓글 삭제

}
