package closet.backend.dao;

import closet.backend.dto.UserJoinDto;
import closet.backend.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;


public interface UserDao {
    List<User> save(UserJoinDto userJoinDto);
    List<User> findByUserNickname(String nickname);
    List<User> findById(int id);
    List<User> findAll();
}
