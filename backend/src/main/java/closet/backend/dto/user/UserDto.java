package closet.backend.dto.user;

import closet.backend.entity.User;
import lombok.*;

@ToString
@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private int id;
    private String nickname;
    private String gender;
    private int age;
    private String uid;
}
