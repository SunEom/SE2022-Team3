package closet.backend.controller;


import closet.backend.dto.PostDetailDto;
import closet.backend.dto.PostDto;
import closet.backend.dto.PostDtoWithCommentCount;
import closet.backend.req.*;
import closet.backend.service.PostService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@RestController
public class PostController {
    private final PostService postService;


    @PostMapping(value = "/post/create", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity createPost(@RequestPart CreatePostReq createPostReq, @RequestPart Optional<MultipartFile> img) throws FirebaseAuthException, IOException {
        PostDto result = postService.createPost(createPostReq, img);
        return ResponseEntity.status(201).body(result);
    }

    @PostMapping(value = "/post/update",consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE} )
    public ResponseEntity updatePost(@RequestPart UpdatePostReq updatePostReq, @RequestPart Optional<MultipartFile> img) throws FirebaseAuthException, IOException {
        PostDto result = postService.updatePost(updatePostReq,img);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/post/delete")
    public ResponseEntity deletePost(@RequestBody DeletePostReq deletePostReq) throws FirebaseAuthException{
        String result = postService.deletePost(deletePostReq);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/post")
    public ResponseEntity getPosts(){
        List<PostDtoWithCommentCount> result = postService.getPosts();
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/post/{post_id}")
    public ResponseEntity getPostDetail(@PathVariable int post_id,@RequestBody Map<String, String> req) throws FirebaseAuthException{
        String idToken = req.get("idToken");
        PostDetailDto result = postService.getPostDetail(post_id,idToken);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/post/{genre}")
    public ResponseEntity searchPostByGenre(@PathVariable String genre){
        List<PostDtoWithCommentCount> result = postService.getPostByGenre(genre);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/post/change_favorite")
    public ResponseEntity changeFavorite(@RequestBody ChangePostFavoriteReq changePostFavoriteReq) throws FirebaseAuthException{
        PostDetailDto result = postService.changeFavorite(changePostFavoriteReq);
        return ResponseEntity.ok().body(result);
    }

}
