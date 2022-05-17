package closet.backend.service;


import closet.backend.dao.UserDao;
import closet.backend.dao.UserDaoImpl;
import closet.backend.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private final UserDao userdao;

    public List<User> getUsers(){
        return userdao.findAll();
    }

    public List<User> saveUser(User user){
        return userdao.save(user);
    }

}
