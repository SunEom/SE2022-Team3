package closet.backend.dao;

import closet.backend.dto.ClothDto;

import java.util.List;

public interface ClothFolderDetailDao {
    ClothDto save(int folder_id, int cloth_id);
    String delete(int folder_id, int cloth_id);
    List<ClothDto> getDetails(int folder_id);
}
