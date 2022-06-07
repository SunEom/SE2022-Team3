package closet.backend.req.comment;

import lombok.*;

@Data
@AllArgsConstructor
@Getter
@ToString
@NoArgsConstructor
public class DeleteCommentReq {

	private String idToken;
	private int comment_id;
	private int post_id;
}
