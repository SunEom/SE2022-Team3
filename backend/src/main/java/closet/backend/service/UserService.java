package closet.backend.service;


import closet.backend.dao.UserDao;
import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
import closet.backend.dto.UserUpdateDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private final UserDao userdao;

    public UserDto register(UserJoinDto userJoinDto){
        UserDto userDto = userdao.save(userJoinDto);
        return userDto;
    }

    public String deleteUser(int id){
        String result = userdao.deleteUser(id);
        return result;
    }

    public UserDto updateUser(UserUpdateDto userUpdateDto){
        UserDto userDto = userdao.update(userUpdateDto);
        return userDto;
    }

    public boolean checkNickname(String nickname){
        UserDto userDto = userdao.findByNickname(nickname);
        if(userDto != null){
            return true;
        }
        else{
            return false;
        }
    }

    public UserDto getUserInfo(int id){
        UserDto userDto = userdao.findById(id);
        return userDto;
    }

}
