package closet.backend.dto.cloth;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Getter
@ToString
@Builder
public class ClothDto {

	private int cloth_id;
	private String name;
	private String season;
	private String category;
	private String brand;
	private String place;
	private String size;
	private String cloth_body;
	private String file_name;
	private LocalDateTime created_date;
	private LocalDateTime updated_date;
	private int favorite;
	private int id;
}
