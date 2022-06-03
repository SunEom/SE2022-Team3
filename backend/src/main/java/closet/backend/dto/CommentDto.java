package closet.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Getter
@ToString
public class CommentDto {

	private int comment_id;
	private String comment_body;
	private LocalDateTime created_date;
	private LocalDateTime updated_date;
	private int post_id;
	private int id;
	private String nickname;
}
