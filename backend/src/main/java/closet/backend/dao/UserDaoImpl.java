package closet.backend.dao;

import closet.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.util.List;


@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<User> userRowMapper = (rs, rowNum) ->
            User.builder()
                    .id(rs.getInt("id"))
                    .uid(rs.getString("uid"))
                    .nickname(rs.getString("nickname"))
                    .age(rs.getInt("age"))
                    .sex(rs.getString("sex"))
            .build();

    @Override
    public List<User> save(User user) {
        jdbcTemplate.execute("INSERT INTO user(uid,nickname,age,sex) VALUES ('"+
                user.getUid()+
                "','"+user.getNickname()+
                "',"+user.getAge()+
                ",'"+user.getSex()+
                "')");
        return jdbcTemplate.query("Select * FROM user WHERE uid = '"+user.getUid()+"'",userRowMapper);
    }

    @Override
    public List<User> findByUserNickname(String nickname) {
        return jdbcTemplate.query("SELECT * FROM user WHERE nickname = " + nickname, userRowMapper);
    }

    @Override
    public List<User> findById(int id) {
        return jdbcTemplate.query("Select * FROM user WHERE id = " + id ,userRowMapper);
    }

    public List<User> findAll(){
        return jdbcTemplate.query("SELECT * FROM user", userRowMapper);
    }
}
