package closet.backend.req;

import lombok.*;

@Data
@AllArgsConstructor
@Getter
@ToString
@NoArgsConstructor
public class CreateCommentReq {

	private String idToken;
	private String comment_body;
	private int post_id;
}
