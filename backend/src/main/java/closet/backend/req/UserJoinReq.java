package closet.backend.req;


import lombok.*;

@ToString
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserJoinReq {
    private String idToken;
    private String nickname;
    private int age;
    private String gender;
}
