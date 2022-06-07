package closet.backend.dto.cloth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Data
@Getter
@AllArgsConstructor
public class UpdateClothDto {

	private int id;
	private int cloth_id;
	private String name;
	private String season;
	private String category;
	private String brand;
	private String place;
	private String size;
	private String cloth_body;
	private String file_name;
}
