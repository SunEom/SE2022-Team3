package closet.backend.service;


import closet.backend.dao.user.UserDao;
import closet.backend.dto.user.UserDto;
import closet.backend.dto.user.UserJoinDto;
import closet.backend.dto.user.UserUpdateDto;
import closet.backend.req.user.UserJoinReq;
import closet.backend.req.user.UserUpdateReq;
import closet.backend.util.AuthUtil;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
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
    private final AuthUtil authUtil;

    public UserDto register(UserJoinReq userJoinReq) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(userJoinReq.getIdToken());
        String uid = decodedToken.getUid();
        UserJoinDto userJoinDto = new UserJoinDto(uid,userJoinReq.getNickname(),userJoinReq.getAge(),userJoinReq.getGender());
        UserDto userDto = userdao.save(userJoinDto);
        return userDto;
    }

    public String deleteUser(String idToken) throws FirebaseAuthException{
        int id = authUtil.getUserId(idToken);
        String result = userdao.deleteUser(id);
        return result;
    }

    public UserDto updateUser(UserUpdateReq userUpdateReq) throws FirebaseAuthException{
        int id = authUtil.getUserId(userUpdateReq.getIdToken());
        UserUpdateDto userUpdateDto = new UserUpdateDto(id,userUpdateReq.getNickname(),userUpdateReq.getAge(), userUpdateReq.getGender());
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

    public UserDto getUserInfo(String idToken) throws FirebaseAuthException {
        int id = authUtil.getUserId(idToken);
        UserDto userDto = userdao.findById(id);
        return userDto;
    }

}
