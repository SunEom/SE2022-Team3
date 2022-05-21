package closet.backend.controller;

import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
import closet.backend.entity.User;
import closet.backend.exception.LoginException;
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

    @PostMapping("/auth/login")
    public UserDto loginUser(@RequestBody String idToken, HttpServletRequest req) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
        String uid = decodedToken.getUid();
        UserDto loginUser = userService.findByUid(uid);
        HttpSession session = req.getSession();
        session.setAttribute("loginUser",loginUser);
        return loginUser;
    }


    @PostMapping("/join") //넘겨주는 정보가 token -> uid, 닉네임, 성별 , 나이
    public UserDto registerUser(@RequestBody UserJoinDto userJoinReq){
        return null;
    }

    @GetMapping("users")
    public UserDto showUsers(){
        return userService.findById(1);
    }
}
