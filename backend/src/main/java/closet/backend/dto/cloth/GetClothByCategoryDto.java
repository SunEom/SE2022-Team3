package closet.backend.dto.cloth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class GetClothByCategoryDto {

	private int id;
	private String category;
}
