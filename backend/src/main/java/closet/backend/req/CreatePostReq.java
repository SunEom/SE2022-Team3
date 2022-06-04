package closet.backend.req;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

import java.io.File;
import java.util.Optional;

@Data
@Getter
@ToString
public class CreatePostReq {
    private String idToken;
    private String title;
    private String genre;
    private String post_body;
    private Optional<File> file;

    public CreatePostReq(String idToken, String title, String genre, String post_body, File inputFile){
        this.idToken = idToken;
        this.title = title;
        this.genre = genre;
        this.post_body = post_body;
        this.file = Optional.ofNullable(inputFile);
    }
}
