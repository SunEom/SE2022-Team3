package closet.backend.entity;

import com.sun.istack.NotNull;
import lombok.*;

import org.springframework.data.annotation.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@NoArgsConstructor
@Setter@Getter
@ToString
public class User extends BaseEntity{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    private String uid;
    @NotNull
    private String nickname;
    @NotNull
    private int age;
    @NotNull
    private String sex;

    @Builder
    public User(int id, String uid, String nickname, int age, String sex) {
        this.id = id;
        this.uid = uid;
        this.nickname = nickname;
        this.age = age;
        this.sex = sex;
    }
}
