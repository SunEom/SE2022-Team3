package closet.backend.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class CreateCommentDto {

	private int id;
	private String comment_body;
	private int post_id;
	
}
