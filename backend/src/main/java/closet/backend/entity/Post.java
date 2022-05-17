package closet.backend.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int post_id;

    private String title;
    private String genre;
    private String post_body;
    private String file_name;
    private int id;

    @Builder
    public Post(String title, String genre, String post_body, String file_name, int id) {
        this.title = title;
        this.genre = genre;
        this.post_body = post_body;
        this.file_name = file_name;
        this.id = id;
    }
}
