package goorm.instagram.service;

import goorm.instagram.domain.User;
import goorm.instagram.domain.UserDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserDAO userDao;

    @Override
    public List<User> getUsers() throws ExecutionException, InterruptedException {
        return userDao.getUsers();
    }
}