package closet.backend.dto.post;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Getter
@ToString
@Builder
public class PostDto {
    private int post_id;
    private String title;
    private String genre;
    private String post_body;
    private String file_name;
    private LocalDateTime created_date;
    private LocalDateTime updated_date;
    private int id;
    private String nickname;
}
