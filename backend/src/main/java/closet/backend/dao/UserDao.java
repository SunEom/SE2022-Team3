package closet.backend.dao;

import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
import closet.backend.dto.UserUpdateDto;
import closet.backend.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;


public interface UserDao {
    UserDto save(UserJoinDto userJoinDto);
    UserDto findByNickname(String nickname);
    UserDto findById(int id);
    List<User> findAll();
    UserDto findByUid(String uid);
    String deleteUser(int id);
    UserDto update(UserUpdateDto userUpdateDto);

}
