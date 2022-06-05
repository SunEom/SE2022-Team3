package closet.backend.controller;

import closet.backend.dto.PostDtoWithCommentCount;
import closet.backend.service.MyPageService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MyPageController {

    private final MyPageService myPageService;

    @PostMapping("/mypage/post")
    public ResponseEntity getPosts(@RequestBody String idToken) throws FirebaseAuthException {
        List<PostDtoWithCommentCount> result = myPageService.getPosts(idToken);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/mypage/favorite_post")
    public ResponseEntity getFavoritePost(@RequestBody String idToken) throws FirebaseAuthException{
        List<PostDtoWithCommentCount> result = myPageService.getFavoritePost(idToken);
        return ResponseEntity.ok().body(result);
    }


}
