package closet.backend.dao.post;

import closet.backend.dto.post.PostDetailDto;

public interface FavoritePostDao {
    PostDetailDto setFavorite(int post_id, int id);
    PostDetailDto removeFavorite(int post_id, int id);
}
