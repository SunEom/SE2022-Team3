package closet.backend.req.comment;

import lombok.*;

@Data
@AllArgsConstructor
@Getter
@ToString
@NoArgsConstructor
public class UpdateCommentReq {

	private String idToken;
	private int comment_id;
	private String comment_body;
	private int post_id;
}
