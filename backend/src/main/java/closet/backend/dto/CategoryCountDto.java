package closet.backend.dto;

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
