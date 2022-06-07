package closet.backend.req.cloth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@Getter
@ToString
public class DeleteClothInFolderReq {

	private String idToken;
	private int folder_id;
	private int cloth_id;
}
