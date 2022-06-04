package closet.backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@Getter
@ToString
@Builder
public class ClothFolderDto {

	private int folder_id;
	private String folder_name;
	private int id;
}
