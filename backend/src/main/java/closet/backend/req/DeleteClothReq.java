package closet.backend.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Data
@Getter
public class DeleteClothReq {

	private String idToken;
	private int cloth_id;
}
