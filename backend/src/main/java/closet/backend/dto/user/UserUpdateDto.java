package closet.backend.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@Getter
@AllArgsConstructor
@ToString
public class UserUpdateDto {
    private int id;
    private String nickname;
    private int age;
    private String gender;
}
