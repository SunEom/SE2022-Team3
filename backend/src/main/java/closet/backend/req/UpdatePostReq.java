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
public class UpdatePostReq {
    private String idToken;
    private int post_id;
    private String title;
    private String genre;
    private String post_body;
}
