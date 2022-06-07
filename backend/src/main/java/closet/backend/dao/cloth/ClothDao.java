package closet.backend.dao.cloth;

import closet.backend.dto.cloth.CategoryCountDto;
import closet.backend.dto.cloth.ClothDto;
import closet.backend.dto.cloth.CreateClothDto;
import closet.backend.dto.cloth.UpdateClothDto;

import java.util.List;

public interface ClothDao {
    List<ClothDto> findById(int id);
    ClothDto findByClothId(int cloth_id);
    ClothDto save(CreateClothDto createClothDto);
    ClothDto update(UpdateClothDto updateClothDto);
    String delete(int cloth_id);
    ClothDto setFavorite(int cloth_id);
    ClothDto removeFavorite(int cloth_id);
    List<CategoryCountDto> countByCategory(int id);
    List<ClothDto> findBySeason(int id, String season);
    List<ClothDto> findByCategory(int id, String category);
    List<ClothDto> findByFavorite(int id);
    int findWriterId(int cloth_id);
}
