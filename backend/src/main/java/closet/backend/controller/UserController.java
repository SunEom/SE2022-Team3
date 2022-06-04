package closet.backend.controller;

import closet.backend.Util.AuthUtil;
import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
import closet.backend.dto.UserUpdateDto;
import closet.backend.entity.User;
import closet.backend.exception.LoginException;
import closet.backend.req.UserJoinReq;
import closet.backend.req.UserUpdateReq;
import closet.backend.service.UserService;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final AuthUtil authUtil;

    @PostMapping("/auth/login")
    public ResponseEntity loginUser(@RequestBody String idToken) throws FirebaseAuthException{
        int id = authUtil.getUserid(idToken);
        UserDto userDto = userService.getUserInfo(id);
        return ResponseEntity.ok().body(userDto);
    }


    @PostMapping("/user/register") //넘겨주는 정보가 token -> uid, 닉네임, 성별 , 나이
    public ResponseEntity registerUser(@RequestBody UserJoinReq userJoinReq) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(userJoinReq.getIdToken());
        String uid = decodedToken.getUid();
        UserJoinDto userJoinDto = new UserJoinDto(uid,userJoinReq.getNickname(),userJoinReq.getAge(),userJoinReq.getGender());
        UserDto userDto = userService.register(userJoinDto);
        return ResponseEntity.ok().body(userDto);
    }

    @PostMapping("/user/check_nickname")
    public ResponseEntity checkNickname(@RequestBody String nickname){
        boolean result = userService.checkNickname(nickname);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/user/userinfo")
    public ResponseEntity getUserInfo(@RequestBody String idToken) throws FirebaseAuthException{
        int id = authUtil.getUserid(idToken);
        UserDto userDto = userService.getUserInfo(id);
        return ResponseEntity.ok().body(userDto);
    }

    @PostMapping("/user/update")
    public ResponseEntity updateUser(@RequestBody UserUpdateReq userUpdateReq) throws  FirebaseAuthException{
        int id = authUtil.getUserid(userUpdateReq.getIdToken());
        UserUpdateDto userUpdateDto = new UserUpdateDto(id,userUpdateReq.getNickname(),userUpdateReq.getAge(), userUpdateReq.getGender());
        UserDto userDto = userService.updateUser(userUpdateDto);
        return ResponseEntity.ok().body(userDto);
    }

    @PostMapping("/user/signout")
    public ResponseEntity deleteUser(@RequestBody String idToken) throws FirebaseAuthException{
        int id = authUtil.getUserid(idToken);
        String result = userService.deleteUser(id);
        return ResponseEntity.ok().body(result);
    }
}
