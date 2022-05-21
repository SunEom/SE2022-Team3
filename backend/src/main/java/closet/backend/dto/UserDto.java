package closet.backend.dto;

import closet.backend.entity.User;
import lombok.*;

@ToString
@Data
@Getter
public class UserDto {

    private int id;
    private String nickname;
    private String sex;
    private int age;
    private String uid;

    public UserDto(int id, String uid, String nickname, String sex, int age) {
        this.id = id;
        this.uid = uid;
        this.nickname = nickname;
        this.sex = sex;
        this.age = age;
    }

}
