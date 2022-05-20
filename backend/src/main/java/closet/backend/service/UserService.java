package closet.backend.service;


import closet.backend.dao.UserDao;
import closet.backend.dao.UserDaoImpl;
import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
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

    public UserDto saveUser(UserJoinDto userJoinDto){
        return userdao.save(userJoinDto);
    }

    public UserDto findByUid(String uid){
        return null;
    }

    public UserDto findById(int id){
        return userdao.findById(id);
    }

}
