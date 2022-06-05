package closet.backend.dao;

import closet.backend.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class PostDaoImpl implements PostDao{

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
    //select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname from post left join user on post.id = user.id
    private final RowMapper<PostDtoWithCommentCount> postCountRowMapper = (rs, rowNum) ->
            PostDtoWithCommentCount.builder()
                    .post_id(rs.getInt("post_id"))
                    .title(rs.getString("title"))
                    .genre(rs.getString("genre"))
                    .post_body(rs.getString("post_body"))
                    .file_name(rs.getString("file_name"))
                    .created_date(rs.getTimestamp("created_date").toLocalDateTime())
                    .updated_date(rs.getTimestamp("updated_date").toLocalDateTime())
                    .id(rs.getInt("id"))
                    .nickname(rs.getString("nickname"))
                    .comment_count(rs.getInt("comment_count"))
                    .build();
    //select post.post_id,title,genre,post_body,file_name,post.created_date,post.updated_date,post.id,nickname,count(comment.post_id) as comment_count from (select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname from post left join user on post.id = user.id) as post left join comment on post.post_id = comment.post_id GROUP BY post.post_id;
    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public PostDto save(CreatePostDto createPostDto) {
        jdbcTemplate.execute("INSERT INTO post(title,genre,post_body,file_name,created_date) VALUES('"+
                createPostDto.getTitle()+
                "','"+createPostDto.getGenre()+
                "','"+createPostDto.getPost_body()+
                "','"+createPostDto.getFile_name()+
                "',NOW())");
        PostDto postDto = jdbcTemplate
                .queryForObject("SELECT post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname FROM post LEFT JOIN user on post.id = user.id WHERE title = '"
                +createPostDto.getTitle()+
                "' and post_body = '"
                +createPostDto.getPost_body()+
                "' ORDER BY created_date DESC;",postRowMapper);
        return postDto;
    }

    @Override
    public List<PostDtoWithCommentCount> findByGenre(String genre) {
        List<PostDtoWithCommentCount> result = jdbcTemplate
                .query("select post.post_id,title,genre,post_body,file_name,post.created_date,post.updated_date,post.id,nickname,count(comment.post_id) as comment_count from (select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname from post left join user on post.id = user.id WHERE genre ='"+genre+"') as post left join comment on post.post_id = comment.post_id GROUP BY post.post_id;",postCountRowMapper);
        return result;
    }

    @Override
    public List<PostDtoWithCommentCount> findAll() {
        List<PostDtoWithCommentCount> result = jdbcTemplate
                .query("select post.post_id,title,genre,post_body,file_name,post.created_date,post.updated_date,post.id,nickname,count(comment.post_id) as comment_count from (select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname from post left join user on post.id = user.id) as post left join comment on post.post_id = comment.post_id GROUP BY post.post_id;",postCountRowMapper);
        return result;
    }

    @Override
    public PostDto update(UpdatePostDto updatePostDto) {
        jdbcTemplate.execute("UPDATE post SET title = '"+ updatePostDto.getTitle()+
                "', genre = '"+updatePostDto.getGenre()+
                "', post_body = '"+updatePostDto.getPost_body()+
                "', file_name = '"+updatePostDto.getFile_name()+
                "', updated_date = NOW() WHERE post_id = "+updatePostDto.getPost_id());
        PostDto postDto = jdbcTemplate.queryForObject("select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname from post left join user on post.id = user.id WHERE post_id = "+updatePostDto.getPost_id(),postRowMapper);
        return postDto;
    }

    @Override
    public String delete(int post_id) {
        jdbcTemplate.execute("DELETE FROM post WHERE post_id = " + post_id);
        return "삭제가 완료 되었습니다.";
    }

    @Override
    public PostDetailDto findByPostId(int post_id, int id) {
        PostDto postDto = jdbcTemplate.queryForObject("Select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname FROM post LEFT JOIN user on post.id = user.id WHERE post_id = "+post_id,postRowMapper);
        int favorite_count = jdbcTemplate.queryForObject("SELECT count(*) FROM favorite_post WHERE post_id = "+post_id,Integer.class);
        int favorite = jdbcTemplate.queryForObject("SELECT count(*) FROM favorite_post WHERE post_id = "+post_id +"and id = "+id,Integer.class);
        PostDetailDto postDetailDto = new PostDetailDto(postDto,favorite,favorite_count);
        return postDetailDto;
    }

    @Override
    public List<PostDtoWithCommentCount> findById(int id) {
        List<PostDtoWithCommentCount> result = jdbcTemplate
                .query("select post.post_id,title,genre,post_body,file_name,post.created_date,post.updated_date,post.id,nickname,count(comment.post_id) as comment_count from (select post_id,title,genre,post_body,file_name,created_date,updated_date,post.id,nickname from post left join user on post.id = user.id WHERE post.id ="+id+") as post left join comment on post.post_id = comment.post_id GROUP BY post.post_id",postCountRowMapper);
        return result;
    }

    @Override
    public int findWriterId(int post_id) {
        int writer_id = jdbcTemplate.queryForObject("SELECT id from post WHERE post_id = "+post_id,Integer.class);
        return writer_id;
    }

    @Override
    public List<PostDtoWithCommentCount> findFavoritePost(int id) {
        List<PostDtoWithCommentCount> result = jdbcTemplate
                .query("select c.post_id,title,genre,post_body,file_name,c.created_date,c.updated_date,c.id,nickname,count(comment.post_id) as comment_count from (select post_id,title,genre,post_body,file_name,created_date,updated_date,b.id,nickname FROM user INNER JOIN(select post.post_id,title,genre,post_body,file_name,created_date,updated_date,id from post INNER JOIN (select post_id from favorite_post WHERE id = "+id+") as a on a.post_id = post.post_id) as b on b.id = user.id) as c LEFT JOIN comment on c.post_id = comment.post_id GROUP BY c.post_id",postCountRowMapper);
        return result;
    }
}
