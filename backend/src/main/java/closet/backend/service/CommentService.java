package closet.backend.service;

import closet.backend.util.AuthUtil;
import closet.backend.dao.comment.CommentDao;
import closet.backend.dto.comment.CommentDto;
import closet.backend.dto.comment.CreateCommentDto;
import closet.backend.dto.comment.UpdateCommentDto;
import closet.backend.exception.CommentException;
import closet.backend.req.comment.CreateCommentReq;
import closet.backend.req.comment.DeleteCommentReq;
import closet.backend.req.comment.UpdateCommentReq;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class CommentService {

    @Autowired
    private final AuthUtil authUtil;
    @Autowired
    private final CommentDao commentDao;

    public List<CommentDto> createComment(CreateCommentReq createCommentReq) throws FirebaseAuthException {
        int id = authUtil.getUserId(createCommentReq.getIdToken());
        CreateCommentDto createCommentDto = new CreateCommentDto(id, createCommentReq.getComment_body(), createCommentReq.getPost_id());
        List<CommentDto> result =commentDao.save(createCommentDto);
        return result;
    }

    public List<CommentDto> updateComment(UpdateCommentReq updateCommentReq) throws FirebaseAuthException{
        int id = authUtil.getUserId(updateCommentReq.getIdToken());
        UpdateCommentDto updateCommentDto = new UpdateCommentDto(id, updateCommentReq.getComment_id(), updateCommentReq.getComment_body(), updateCommentReq.getPost_id());
        if(id == commentDao.findWriterId(updateCommentReq.getComment_id())){
            List<CommentDto> result = commentDao.update(updateCommentDto);
            return result;
        } else{
            throw new CommentException("본인이 작성한 댓글이 아닙니다.",403);
        }
    }

    public List<CommentDto> deleteComment(DeleteCommentReq deleteCommentReq) throws FirebaseAuthException{
        int id = authUtil.getUserId(deleteCommentReq.getIdToken());
        if(id == commentDao.findWriterId(deleteCommentReq.getComment_id())){
            List<CommentDto> result = commentDao.delete(deleteCommentReq.getComment_id(),deleteCommentReq.getPost_id());
            return result;
        } else{
            throw new CommentException("본인이 작성한 댓글이 아닙니다.",403);
        }
    }

    public List<CommentDto> getComment(int post_id){
        List<CommentDto> result = commentDao.findByPostId(post_id);
        return result;
    }

}
