package closet.backend.dao;

import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
import closet.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.sql.ResultSet;
import java.sql.SQLException;
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
                    .gender(rs.getString("gender"))
            .build();

    @Override
    public UserDto save(UserJoinDto userJoinDto) {
        jdbcTemplate.execute("INSERT INTO user(uid,nickname,age,gender) VALUES ('"+
                userJoinDto.getUid()+
                "','"+userJoinDto.getNickname()+
                "',"+userJoinDto.getAge()+
                ",'"+userJoinDto.getGender()+
                "')");
        User user = jdbcTemplate.queryForObject("Select * FROM user WHERE uid = '"+userJoinDto.getUid()+"'",userRowMapper);
        UserDto userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
        return userDto;
    }

    @Override
    public UserDto findByUserNickname(String nickname) {
        User user = jdbcTemplate.queryForObject("SELECT * FROM user WHERE nickname = " + nickname, userRowMapper);
        UserDto userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
        return userDto;
    }

    @Override
    public UserDto findById(int id) {
        User user = jdbcTemplate.queryForObject("Select * FROM user WHERE id = " + id ,userRowMapper);
        UserDto userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
        return userDto;
    }

    @Override
    public UserDto findByUid(String uid) {
        return null;
    }

    public List<User> findAll(){
        return jdbcTemplate.query("SELECT * FROM user", userRowMapper);
    }
}
