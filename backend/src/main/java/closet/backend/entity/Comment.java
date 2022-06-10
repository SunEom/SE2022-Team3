package closet.backend.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.tomcat.jni.Local;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Builder
@Getter
public class Comment extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private int comment_id;
    private String comment_body;
    @NotNull
    private LocalDateTime created_date;
    private LocalDateTime updated_date;
    @NotNull
    private int id;
    @NotNull
    private int post_id;

}
