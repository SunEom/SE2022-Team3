package closet.backend.dto.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@ToString
@Getter
@AllArgsConstructor
public class ChangePostFavoriteDto {
    private int id;
    private int post_id;
    private int favorite;
}
