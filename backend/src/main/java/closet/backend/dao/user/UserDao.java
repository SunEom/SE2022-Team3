package closet.backend.dao.user;

import closet.backend.dto.user.UserDto;
import closet.backend.dto.user.UserJoinDto;
import closet.backend.dto.user.UserUpdateDto;
import closet.backend.entity.User;

import java.util.List;


public interface UserDao {
    UserDto save(UserJoinDto userJoinDto);
    UserDto findByNickname(String nickname);
    UserDto findById(int id);
    List<User> findAll();
    UserDto findByUid(String uid);
    String deleteUser(int id);
    UserDto update(UserUpdateDto userUpdateDto);

}
