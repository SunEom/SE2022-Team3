package closet.backend.dao;

import closet.backend.dto.ClothFolderDto;
import closet.backend.dto.CreateFolderDto;
import closet.backend.dto.UpdateFolderDto;
import closet.backend.req.UpdateFolderReq;

import java.util.List;

public interface ClothFolderDao {
    ClothFolderDto save(CreateFolderDto createFolderDto);
    ClothFolderDto update(UpdateFolderDto updateFolderDto);
    String delete(int folder_id);
    List<ClothFolderDto> getFolder(int id);
}
