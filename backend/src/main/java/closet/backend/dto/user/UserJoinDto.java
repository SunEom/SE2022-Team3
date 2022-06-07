package closet.backend.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Data
@Getter
@AllArgsConstructor
public class UserJoinDto {
    private String uid;
    private String nickname;
    private int age;
    private String gender;
}
