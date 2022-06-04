package closet.backend.dao;

import closet.backend.dto.PostDetailDto;

public interface FavoritePostDao {
    PostDetailDto setFavorite(int post_id, int id);
    PostDetailDto removeFavorite(int post_id, int id);
}
