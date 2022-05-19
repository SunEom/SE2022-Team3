package closet.backend.dto;

import closet.backend.entity.User;
import lombok.*;

@ToString
@Data
@Getter
public class UserDto {

    private int id;
    private String nickname;
    private String gender;
    private int age;
    private String uid;

    public UserDto(int id, String uid, String nickname, String gender, int age) {
        this.id = id;
        this.uid = uid;
        this.nickname = nickname;
        this.gender = gender;
        this.age = age;
    }

    public User toEntity(){
        User user = new User(this.id,this.uid,this.nickname,this.age,this.gender);
        return user;
    }
}
