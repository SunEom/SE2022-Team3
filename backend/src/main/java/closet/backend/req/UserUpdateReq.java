package closet.backend.req;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@ToString
@Getter
@AllArgsConstructor
public class UserUpdateReq {
    private String idToken;
    private String nickname;
    private int age;
    private String gender;
}
