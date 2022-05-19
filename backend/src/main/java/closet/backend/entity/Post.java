package closet.backend.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Builder
@Getter
public class Post extends BaseEntity{ //Create -> token
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private int post_id;
    @NotNull
    private String title;
    @NotNull
    private String genre;
    @NotNull
    private String post_body;
    private String file_name;
    @NotNull
    private int id;
}
