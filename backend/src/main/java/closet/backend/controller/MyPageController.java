package closet.backend.controller;

import closet.backend.dto.post.PostDtoWithCommentCount;
import closet.backend.service.MyPageService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
public class MyPageController {

    private final MyPageService myPageService;

    @PostMapping("/mypage/post")
    public ResponseEntity getPosts(@RequestBody Map<String, String> req) throws FirebaseAuthException {
        String idToken = req.get("idToken");
        List<PostDtoWithCommentCount> result = myPageService.getPosts(idToken);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/mypage/favorite_post")
    public ResponseEntity getFavoritePost(@RequestBody Map<String, String> req) throws FirebaseAuthException{
        String idToken = req.get("idToken");
        List<PostDtoWithCommentCount> result = myPageService.getFavoritePost(idToken);
        return ResponseEntity.ok().body(result);
    }


}
