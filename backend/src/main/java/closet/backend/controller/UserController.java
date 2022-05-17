package closet.backend.controller;

import closet.backend.entity.User;
import closet.backend.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<Object> getUsers(){
        List<User> list = userService.getUsers();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping("/join")
    public List<User> registerUser(@RequestBody@Validated JoinRequest req){
        User user = new User(req.id,req.uid,req.nickname,Integer.parseInt(req.age),req.sex);
        List<User> result_user = userService.saveUser(user);
        return result_user;
    }


    @Data
    static class JoinRequest{
        int id;
        String uid;
        @NotEmpty(message =  "닉네임은 비어 있을 수 없습니다.")
        String nickname;
        @NotEmpty(message = "나이는 비어있을 수 없습니다.")
        String age;
        @NotEmpty(message = "성별은 비어있을 수 없습니다.")
        String sex;
    }

}
