package closet.backend.dao.post;

import closet.backend.dto.post.*;

import java.util.List;

public interface PostDao {
    PostDto save(CreatePostDto createPostDto);
    List<PostDtoWithCommentCount> findByGenre(String genre);
    List<PostDtoWithCommentCount> findAll();
    PostDto update(UpdatePostDto updatePostDto);
    String delete(int post_id);
    PostDetailDto findByPostId(int post_id, int id);
    List<PostDtoWithCommentCount> findById(int id);
    int findWriterId(int post_id);
    List<PostDtoWithCommentCount> findFavoritePost(int id);
}
