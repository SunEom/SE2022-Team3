package closet.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class ClothFolderDto {

	private int folder_id;
	private String folder_name;
	private int id;
}
