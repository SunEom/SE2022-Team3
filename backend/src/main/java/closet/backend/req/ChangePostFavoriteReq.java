package closet.backend.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@Getter
@ToString
public class ChangePostFavoriteReq {
    private String idToken;
    private int post_id;
    private int favorite;
}
