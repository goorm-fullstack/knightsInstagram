package goorm.instagram.firebase;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class FirestoreService {
    @Resource
    private FirestoreConfig firestoreConfig;

    public void addUser(String id, String first, String middle, String last, long born) {
        Firestore db = firestoreConfig.getFirestore();
        DocumentReference docRef = db.collection("users").document(id);
        Map<String, Object> data = new HashMap<>();
        data.put("first", first);
        data.put("middle", middle);
        data.put("last", last);
        data.put("born", born);
        ApiFuture<WriteResult> result = docRef.set(data);

        try {
            System.out.println("Update time : " + result.get().getUpdateTime());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }

    public void getAllUsers() {
        Firestore db = firestoreConfig.getFirestore();
        ApiFuture<QuerySnapshot> query = db.collection("users").get();

        try {
            List<QueryDocumentSnapshot> documents = query.get().getDocuments();
            for (QueryDocumentSnapshot document : documents) {
                System.out.println("User: " + document.getId());
                System.out.println("First: " + document.getString("first"));
                if (document.contains("middle")) {
                    System.out.println("Middle: " + document.getString("middle"));
                }
                System.out.println("Last: " + document.getString("last"));
                System.out.println("Born: " + document.getLong("born"));
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}

