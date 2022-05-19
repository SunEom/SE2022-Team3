package closet.backend.entity;

import com.sun.istack.NotNull;
import lombok.*;

import org.springframework.data.annotation.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@NoArgsConstructor
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
    private String gender;

    @Builder
    public User(int id, String uid, String nickname, int age, String gender) {
        this.id = id;
        this.uid = uid;
        this.nickname = nickname;
        this.age = age;
        this.gender = gender;
    }
}
