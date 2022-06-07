package closet.backend.dao.cloth;

import closet.backend.dto.cloth.ClothFolderDto;
import closet.backend.dto.cloth.CreateFolderDto;
import closet.backend.dto.cloth.UpdateFolderDto;

import java.util.List;

public interface ClothFolderDao {
    ClothFolderDto save(CreateFolderDto createFolderDto);
    ClothFolderDto update(UpdateFolderDto updateFolderDto);
    String delete(int folder_id);
    List<ClothFolderDto> getFolder(int id);
}
