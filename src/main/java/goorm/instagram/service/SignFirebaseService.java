package goorm.instagram.service;

import goorm.instagram.domain.User;

public interface SignFirebaseService {
    public String insertUser(User user) throws Exception;
    public User loginUser(String email, String password) throws Exception;
    public String updateUser(User user) throws Exception;
    public String deleteUser(String email) throws Exception;
}
