package goorm.instagram.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import goorm.instagram.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FirebaseServiceImpl implements FirebaseService{
    public static final String COLLECTION_NAME = "Users";
    @Override
    public String insertUser(User user) throws Exception{
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture =
                firestore.collection(COLLECTION_NAME).document(user.getId()).set(user);
        return apiFuture.get().getUpdateTime().toString();
    }

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



    @Override
    public User getUserDetail(String id) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        DocumentReference documentReference =
                firestore.collection(COLLECTION_NAME).document(id);
        ApiFuture<DocumentSnapshot> apiFuture = documentReference.get();
        DocumentSnapshot documentSnapshot = apiFuture.get();
        User user = null;
        if(documentSnapshot.exists()){
            user = documentSnapshot.toObject(User.class);
            return user;
        }
        else{
            return null;
        }
    }

    @Override
    public String updateUser(User user) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<com.google.cloud.firestore.WriteResult> apiFuture
                = firestore.collection(COLLECTION_NAME).document(user.getId()).set(user);
        return apiFuture.get().getUpdateTime().toString();
    }

    @Override
    public String deleteUser(String id) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture
                = firestore.collection(COLLECTION_NAME).document(id).delete();
        return "Document id: "+id+" delete";
    }
}