package goorm.instagram.service;

import goorm.instagram.domain.Post;

import java.util.List;
import java.util.concurrent.ExecutionException;


public interface PostService{

    Post createPost(Post post);


    void deletePost(String Id);

    List<Post> getAllPosts() throws ExecutionException, InterruptedException;

}
