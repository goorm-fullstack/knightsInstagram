package goorm.instagram.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import goorm.instagram.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignFirebaseServiceImpl implements SignFirebaseService {
    public static final String COLLECTION_NAME = "Users";

    // 회원 추가 로직
    @Override
    public String insertUser(User user) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture =
                firestore.collection(COLLECTION_NAME).document(user.getEmail()).set(user);
        return apiFuture.get().getUpdateTime().toString();
    }


    // 로그인 로직
    @Override
    public User loginUser(String email, String password) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        CollectionReference users = firestore.collection(COLLECTION_NAME);
        Query query = users.whereEqualTo("email", email).whereEqualTo("password", password);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
        User user = null;

        if (!documents.isEmpty()) {
            user = documents.get(0).toObject(User.class);
        }
        return user;
    }

    // 회원 삭제 로직
    @Override
    public String deleteUser(String email) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        Query query = firestore.collection("Users").whereEqualTo("email", email);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();

        if (!documents.isEmpty()) {
            String documentId = documents.get(0).getId();
            firestore.collection("Users").document(documentId).delete();
            return "Document email: " + email + " delete";
        } else {
            return "No document found with email: " + email;
        }
    }

    // 회원 정보수정
    @Override
    public String updateUser(User user) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<com.google.cloud.firestore.WriteResult> apiFuture
                = firestore.collection(COLLECTION_NAME).document(user.getEmail()).set(user);
        return apiFuture.get().getUpdateTime().toString();
    }

}
