package closet.backend.dao.cloth;

import closet.backend.dto.cloth.ClothDto;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

public interface ClothFolderDetailDao {
    ClothDto save(int folder_id, int cloth_id) throws SQLIntegrityConstraintViolationException;
    String delete(int folder_id, int cloth_id);
    List<ClothDto> getDetails(int folder_id);
}
