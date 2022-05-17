package closet.backend.dto;

import lombok.*;

@ToString
@Data
@Getter
public class UserDto {

    private int id;
    private String nickname;
    private String sex;
    private int age;

    public UserDto(int id, String nickname, String sex, int age) {
        this.id = id;
        this.nickname = nickname;
        this.sex = sex;
        this.age = age;
    }
}
