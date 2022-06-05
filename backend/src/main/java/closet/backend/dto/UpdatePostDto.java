package closet.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@Getter
@ToString
@AllArgsConstructor
public class UpdatePostDto {
    private int id;
    private int post_id;
    private String title;
    private String genre;
    private String post_body;
    private String file_name;
}

