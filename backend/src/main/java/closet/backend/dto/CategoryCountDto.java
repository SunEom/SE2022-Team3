package closet.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@AllArgsConstructor
@Getter
@ToString
public class CategoryCountDto {

	private int count;
	private String category;
}