package goorm.instagram.service;

import goorm.instagram.domain.Comment;
import goorm.instagram.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Slf4j
@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    /**
     * 전체 댓글 목록
     *
     * @return
     * @throws ExecutionException
     * @throws InterruptedException
     */
    @Override
    public List<Comment> getAllComments() throws ExecutionException, InterruptedException {
        return commentRepository.getAllComments();
    }

    /**
     * 댓글 작성
     *
     * @param comment
     * @return
     */
    @Override
    public Comment addComment(Comment comment) {
        return commentRepository.addComment(comment);
    }

    /**
     * 댓글 수정
     *
     * @param id
     * @param updateContent
     */
    @Override
    public void updateComment(String id, Comment comment) {
        commentRepository.updateComment(id, comment);
    }

    /**
     * 댓글 삭제
     *
     * @param id
     */
    @Override
    public void deleteComment(String id) {
        commentRepository.deleteComment(id);
    }
}
