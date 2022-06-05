package closet.backend.dao;

import closet.backend.dto.UserDto;
import closet.backend.dto.UserJoinDto;
import closet.backend.dto.UserUpdateDto;
import closet.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
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
        UserDto userDto;
        try{
            User user = jdbcTemplate.queryForObject("Select * FROM user WHERE uid = '"+userJoinDto.getUid()+"'",userRowMapper);
            userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
        } catch(EmptyResultDataAccessException e){
            userDto = null;
        }
        return userDto;
    }

    @Override
    public UserDto findByNickname(String nickname) {
        try{
            User user = jdbcTemplate.queryForObject("SELECT * FROM user WHERE nickname = '" + nickname+"'", userRowMapper);
            UserDto userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
            return userDto;
        }catch(IncorrectResultSizeDataAccessException error){
            return null;
        }
    }

    @Override
    public UserDto findById(int id) {
        try {
            User user = jdbcTemplate.queryForObject("Select * FROM user WHERE id = " + id, userRowMapper);
            UserDto userDto = new UserDto(user.getId(), user.getNickname(), user.getGender(), user.getAge(), user.getUid());
            return userDto;
        } catch(EmptyResultDataAccessException error){
            return null;
        }
    }

    @Override
    public UserDto findByUid(String uid) {
        try{
            User user = jdbcTemplate.queryForObject("Select * FROM user WHERE uid = " + uid ,userRowMapper);
            UserDto userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
            return userDto;
        } catch(EmptyResultDataAccessException error){
        return null;
        }
    }

    public List<User> findAll(){
        return jdbcTemplate.query("SELECT * FROM user", userRowMapper);
    }

    @Override
    public String deleteUser(int id) {
        jdbcTemplate.execute("DELETE FROM user WHERE id = " + id);
        return "탈퇴가 완료 되었습니다.";
    }

    @Override
    public UserDto update(UserUpdateDto userUpdateDto) {
        jdbcTemplate.execute("UPDATE user SET nickname = '"+userUpdateDto.getNickname()+
                "', age = "+userUpdateDto.getAge()+
                ", gender = '"+userUpdateDto.getGender()+"' WHERE id = "+userUpdateDto.getId());
        User user = jdbcTemplate.queryForObject("Select * FROM user WHERE id = " + userUpdateDto.getId() ,userRowMapper);
        UserDto userDto = new UserDto(user.getId(),user.getNickname(),user.getGender(),user.getAge(),user.getUid());
        return userDto;
    }
}
