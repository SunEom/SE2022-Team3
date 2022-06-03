package closet.backend.req;

import java.io.File;
import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Data
@Getter
@AllArgsConstructor
public class UpdateClothReq {

	private Stirng idToken;
	private int cloth_id;
	private String name;
	private String season;
	private String category;
	private String brand;
	private String place;
	private String size;
	private String cloth_body;
	private Optional<File> file;
}