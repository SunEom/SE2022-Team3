package closet.backend.dao.comment;

import closet.backend.dto.comment.CommentDto;
import closet.backend.dto.comment.CreateCommentDto;
import closet.backend.dto.comment.UpdateCommentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommentDaoImpl implements CommentDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<CommentDto> commentRowMapper = (rs, rowNum) ->
            CommentDto.builder()
                    .comment_id(rs.getInt("comment_id"))
                    .comment_body(rs.getString("comment_body"))
                    .created_date(rs.getTimestamp("created_date").toLocalDateTime())
                    .updated_date(rs.getTimestamp("updated_date").toLocalDateTime())
                    .post_id(rs.getInt("post_id"))
                    .id(rs.getInt("id"))
                    .nickname(rs.getString("nickname"))
                    .build();

    @Override
    public List<CommentDto> findByPostId(int post_id) {
        List<CommentDto> result = jdbcTemplate.query("select comment_id,comment_body,created_date,updated_date,post_id,comment.id,nickname FROM comment LEFT JOIN user ON comment.id = user.id WHERE post_id = "+post_id+" ORDER BY comment_id"
                ,commentRowMapper);
        return result;
    }

    @Override
    public List<CommentDto> save(CreateCommentDto createCommentDto) {
        jdbcTemplate.execute("INSERT INTO comment(comment_body,post_id,id,created_date,updated_date) VALUES('"+
                createCommentDto.getComment_body()+
                "', "+createCommentDto.getPost_id()+
                ", "+createCommentDto.getId()+
                ", NOW(),NOW())");
        List<CommentDto> result = jdbcTemplate.query("select comment_id,comment_body,created_date,updated_date,post_id,comment.id,nickname FROM comment LEFT JOIN user ON comment.id = user.id WHERE post_id = "+createCommentDto.getPost_id()+" ORDER BY comment_id"
                ,commentRowMapper);
        return result;
    }

    @Override
    public List<CommentDto> update(UpdateCommentDto updateCommentDto) {
        jdbcTemplate.execute("UPDATE comment SET comment_body = '"
                +updateCommentDto.getComment_body()
                +"', updated_date = NOW() WHERE comment_id = "
                +updateCommentDto.getComment_id());
        List<CommentDto> result = jdbcTemplate.query("select comment_id,comment_body,created_date,updated_date,post_id,comment.id,nickname FROM comment LEFT JOIN user ON comment.id = user.id WHERE post_id = "+updateCommentDto.getPost_id()+" ORDER BY comment_id"
                ,commentRowMapper);
        return result;
    }

    @Override
    public List<CommentDto> delete(int comment_id,int post_id) {
        jdbcTemplate.execute("DELETE FROM comment WHERE comment_id = "+comment_id);
        List<CommentDto> result = jdbcTemplate.query("select comment_id,comment_body,created_date,updated_date,post_id,comment.id,nickname FROM comment LEFT JOIN user ON comment.id = user.id WHERE post_id = "+post_id+" ORDER BY comment_id"
                ,commentRowMapper);
        return result;
    }

    @Override
    public int findWriterId(int comment_id) {
        int writer_id = jdbcTemplate.queryForObject("SELECT id FROM comment WHERE comment_id = "+comment_id,Integer.class);
        return writer_id;
    }
}
