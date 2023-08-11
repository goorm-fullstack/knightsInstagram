package goorm.instagram.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import goorm.instagram.domain.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;


@Repository
public class PostRepository {

    public static final String COL_NAME = "Post";


    public Post createPost(Post post){
        Firestore db = FirestoreClient.getFirestore();
        String id = db.collection(COL_NAME).document().getId();
        ApiFuture<WriteResult> apiFuture = db.collection(COL_NAME).document(id).set(post);

        return post;
    }

    public List<Post> getAllPosts() throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        List<Post> posts = new ArrayList<>();

        ApiFuture<QuerySnapshot> apiFuture = db.collection(COL_NAME).get();
        List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            posts.add(document.toObject(Post.class));
        }

        return posts;
    }

    public void deletePost(String Id) {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = db.collection(COL_NAME).document(Id).delete();
    }

}
