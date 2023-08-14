package goorm.instagram.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import goorm.instagram.domain.Comment;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Repository
public class CommentRepository {

    public static final String COLLECTION_NAME = "comment";
    public static Firestore db = FirestoreClient.getFirestore();

    /**
     * 전체 댓글 목록
     *
     * @return
     * @throws ExecutionException
     * @throws InterruptedException
     */
    public List<Comment> getAllComments() throws ExecutionException, InterruptedException {
        List<Comment> comments = new ArrayList<>();

        ApiFuture<QuerySnapshot> future = db.collection(COLLECTION_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            comments.add(document.toObject(Comment.class));
        }

        return comments;
    }

    /**
     * 댓글 작성
     *
     * @param comment
     * @return
     */
    public Comment addComment(Comment comment) {
        String id = db.collection(COLLECTION_NAME).document().getId();
        ApiFuture<WriteResult> future = db.collection(COLLECTION_NAME).document(id).set(comment);
        return comment;
    }

    /**
     * 댓글 수정
     *
     * @param id
     * @param updateContent
     */
    public void updateComment(String id, Comment comment) {
        ApiFuture<WriteResult> future = db.collection(COLLECTION_NAME).document(id).set(comment);
    }

    /**
     * 댓글 삭제
     *
     * @param id
     */
    public void deleteComment(String id) {
        ApiFuture<WriteResult> future = db.collection(COLLECTION_NAME).document(id).delete();
    }
}
