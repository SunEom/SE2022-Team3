package closet.backend.dao.comment;

import closet.backend.dto.comment.CommentDto;
import closet.backend.dto.comment.CreateCommentDto;
import closet.backend.dto.comment.UpdateCommentDto;

import java.util.List;

public interface CommentDao {
    List<CommentDto> findByPostId(int post_id);
    List<CommentDto> save(CreateCommentDto createCommentDto);
    List<CommentDto> update(UpdateCommentDto updateCommentDto);
    List<CommentDto> delete(int comment_id, int post_id);
    int findWriterId(int comment_id);
}
