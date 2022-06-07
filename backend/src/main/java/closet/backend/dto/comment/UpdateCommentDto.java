package closet.backend.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class UpdateCommentDto {

	private int id;
	private int comment_id;
	private String comment_body;
	private int post_id;
}
