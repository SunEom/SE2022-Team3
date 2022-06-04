package closet.backend.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class ChangeFavoriteReq {

	private String idToken;
	private int cloth_id;
	private int favorite;
}
