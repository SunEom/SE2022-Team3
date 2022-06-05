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

@Slf4j
@RequiredArgsConstructor
@RestController
public class PostController {
    private final PostService postService;


    @PostMapping(value = "/post/create", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity createPost(@RequestPart CreatePostReq createPostReq, @RequestPart MultipartFile img) throws FirebaseAuthException, IOException {
        PostDto postDto = postService.createPost(createPostReq);
        return ResponseEntity.ok().body(postDto);
    }

    @PostMapping("/post/update")
    public ResponseEntity updatePost(@RequestBody UpdatePostReq updatePostReq){

        return null;
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
    public ResponseEntity getPostDetail(@PathVariable int post_id,@RequestBody String idToken) throws FirebaseAuthException{
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
