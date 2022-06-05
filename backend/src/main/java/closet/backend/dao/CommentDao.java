package closet.backend.dao;

import closet.backend.dto.CommentDto;
import closet.backend.dto.CreateCommentDto;
import closet.backend.dto.UpdateCommentDto;

import java.util.List;

public interface CommentDao {
    List<CommentDto> findByPostId(int post_id);
    List<CommentDto> save(CreateCommentDto createCommentDto);
    List<CommentDto> update(UpdateCommentDto updateCommentDto);
    List<CommentDto> delete(int comment_id, int post_id);
    int findWriterId(int comment_id);
}
