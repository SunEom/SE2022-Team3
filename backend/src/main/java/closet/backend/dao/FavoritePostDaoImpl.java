package closet.backend.dao;

import closet.backend.dto.PostDetailDto;
import closet.backend.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public class FavoritePostDaoImpl implements FavoritePostDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<PostDto> postRowMapper = (rs, rowNum) ->
            PostDto.builder()
                    .post_id(rs.getInt("post_id"))
                    .title(rs.getString("title"))
                    .genre(rs.getString("genre"))
                    .post_body(rs.getString("post_body"))
                    .file_name(rs.getString("file_name"))
                    .created_date(rs.getTimestamp("created_date").toLocalDateTime())
                    .updated_date(rs.getTimestamp("updated_date").toLocalDateTime())
                    .id(rs.getInt("id"))
                    .nickname(rs.getString("nickname"))
                    .build();

    @Override
    public PostDetailDto setFavorite(int post_id, int id) {
        jdbcTemplate.execute("INSERT INTO favorite_post(post_id,id) VALUES ("+post_id+","+id+")");
        PostDto postDto = jdbcTemplate.queryForObject("Select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname FROM post LEFT JOIN user on post.id = user.id WHERE post_id = "+post_id,postRowMapper);
        int favorite_count = jdbcTemplate.queryForObject("SELECT count(*) FROM favorite_post WHERE post_id = "+post_id,Integer.class);
        int favorite = jdbcTemplate.queryForObject("SELECT count(*) FROM favorite_post WHERE post_id = "+post_id +" and id = "+id,Integer.class);
        PostDetailDto postDetailDto = new PostDetailDto(postDto,favorite,favorite_count);
        return postDetailDto;
    }

    @Override
    public PostDetailDto removeFavorite(int post_id, int id) {
        jdbcTemplate.execute("DELETE FROM favorite_post WHERE post_id = "+post_id+" and id = "+id);
        PostDto postDto = jdbcTemplate.queryForObject("Select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname FROM post LEFT JOIN user on post.id = user.id WHERE post_id = "+post_id,postRowMapper);
        int favorite_count = jdbcTemplate.queryForObject("SELECT count(*) FROM favorite_post WHERE post_id = "+post_id,Integer.class);
        int favorite = jdbcTemplate.queryForObject("SELECT count(*) FROM favorite_post WHERE post_id = "+post_id +" and id = "+id,Integer.class);
        PostDetailDto postDetailDto = new PostDetailDto(postDto,favorite,favorite_count);
        return postDetailDto;
    }
}
