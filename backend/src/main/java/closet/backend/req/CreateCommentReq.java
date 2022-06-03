package closet.backend.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class CreateCommentReq {

	private String idToken;
	private String comment_body;
	private int post_id;
}
