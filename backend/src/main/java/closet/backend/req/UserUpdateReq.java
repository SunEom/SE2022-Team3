package closet.backend.req;


import lombok.*;

@Data
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateReq {
    private String idToken;
    private String nickname;
    private int age;
    private String gender;
}
