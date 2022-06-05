package closet.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
@Getter
public class PostDetailDto {
    private PostDto postDto;
    private int favorite;
    private int favorite_count;
}
