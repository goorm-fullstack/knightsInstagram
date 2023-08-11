package goorm.instagram.service;


import goorm.instagram.domain.Post;
import goorm.instagram.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;


@Slf4j
@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public Post createPost(Post post) {
        return postRepository.createPost(post);
    }

    @Override
    public void deletePost(String Id) {
        postRepository.deletePost(Id);
    }

    @Override
    public List<Post> getAllPosts() throws ExecutionException, InterruptedException {
        return postRepository.getAllPosts();
    }
}
