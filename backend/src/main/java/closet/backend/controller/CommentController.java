package closet.backend.controller;

import closet.backend.util.AuthUtil;
import closet.backend.dto.comment.CommentDto;
import closet.backend.req.comment.CreateCommentReq;
import closet.backend.req.comment.DeleteCommentReq;
import closet.backend.req.comment.UpdateCommentReq;
import closet.backend.service.CommentService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class CommentController {

    private final AuthUtil authUtil;
    private final CommentService commentService;

    @PostMapping("/comment/create")
    public ResponseEntity createComment(@RequestBody CreateCommentReq createCommentReq) throws FirebaseAuthException {
        List<CommentDto> result = commentService.createComment(createCommentReq);
        return ResponseEntity.status(201).body(result);
    }

    @PostMapping("/comment/update")
    public ResponseEntity updateComment(@RequestBody UpdateCommentReq updateCommentReq) throws FirebaseAuthException{
        List<CommentDto> result = commentService.updateComment(updateCommentReq);
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/comment/delete")
    public ResponseEntity deleteComment(@RequestBody DeleteCommentReq deleteCommentReq) throws FirebaseAuthException{
        List<CommentDto> result = commentService.deleteComment(deleteCommentReq);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/comment/{post_id}")
    public ResponseEntity getComment(@PathVariable int post_id){
        List<CommentDto> result = commentService.getComment(post_id);
        return ResponseEntity.status(200).body(result);
    }

}
