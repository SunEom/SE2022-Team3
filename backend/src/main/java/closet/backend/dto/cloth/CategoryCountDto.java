package closet.backend.dto.cloth;

import lombok.*;

@Data
@AllArgsConstructor
@Getter
@ToString
@Builder
public class CategoryCountDto {

	private int count;
	private String category;
}
