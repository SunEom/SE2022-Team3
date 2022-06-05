package closet.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class CreatePostDto {
    private int id;
    private String title;
    private String genre;
    private String post_body;
    private String file_name;
}
