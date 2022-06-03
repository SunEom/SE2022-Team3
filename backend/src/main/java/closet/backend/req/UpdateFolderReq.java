package closet.backend.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class UpdateFolderReq {

	private String idToken;
	private int folder_id;
	private String folderName;
}
