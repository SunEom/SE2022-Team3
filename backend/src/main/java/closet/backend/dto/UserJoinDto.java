package closet.backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Data
@Getter
public class UserJoinDto {

    private String uid;
    private String nickname;
    private int age;
    private String gender;

    public UserJoinDto(String uid, String nickname, int age, String gender) {
        this.uid = uid;
        this.nickname = nickname;
        this.age = age;
        this.gender = gender;
    }
}
