package closet.backend.dto.cloth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class ClothIntoFolderDto {

	private int id;
	private int folder_id;
	private int cloth_id;
}
