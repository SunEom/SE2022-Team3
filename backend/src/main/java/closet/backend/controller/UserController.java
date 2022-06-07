package closet.backend.controller;

import closet.backend.util.AuthUtil;
import closet.backend.dto.user.UserDto;
import closet.backend.dto.user.UserJoinDto;
import closet.backend.dto.user.UserUpdateDto;
import closet.backend.req.user.UserJoinReq;
import closet.backend.req.user.UserUpdateReq;
import closet.backend.service.UserService;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final AuthUtil authUtil;

    @PostMapping("/auth/login")
    public ResponseEntity loginUser(@RequestBody Map<String, String> req) throws FirebaseAuthException{
        String idToken = req.get("idToken");
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
    public ResponseEntity checkNickname(@RequestBody Map<String, String> req){
        String nickname = req.get("nickname");
        boolean result = userService.checkNickname(nickname);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/user/userinfo")
    public ResponseEntity getUserInfo(@RequestBody Map<String, String> req) throws FirebaseAuthException{
        String idToken = req.get("idToken");
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
    public ResponseEntity deleteUser(@RequestBody Map<String, String> req) throws FirebaseAuthException{
        String idToken = req.get("idToken");
        int id = authUtil.getUserid(idToken);
        String result = userService.deleteUser(id);
        return ResponseEntity.ok().body(result);
    }
}
