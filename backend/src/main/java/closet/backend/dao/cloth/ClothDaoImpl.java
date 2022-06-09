package closet.backend.dao.cloth;

import closet.backend.dto.cloth.CategoryCountDto;
import closet.backend.dto.cloth.ClothDto;
import closet.backend.dto.cloth.CreateClothDto;
import closet.backend.dto.cloth.UpdateClothDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClothDaoImpl implements ClothDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<ClothDto> clothRowMapper = (rs, rowNum) ->
        ClothDto.builder()
                .cloth_id(rs.getInt("cloth_id"))
                .name(rs.getString("name"))
                .season(rs.getString("season"))
                .category(rs.getString("category"))
                .brand(rs.getString("brand"))
                .place(rs.getString("place"))
                .size(rs.getString("size"))
                .cloth_body(rs.getString("cloth_body"))
                .file_name(rs.getString("file_name"))
                .created_date(rs.getTimestamp("created_date").toLocalDateTime())
                .updated_date(rs.getTimestamp("updated_date").toLocalDateTime())
                .favorite(rs.getInt("favorite"))
                .id(rs.getInt("id"))
                .build();

    private final RowMapper<CategoryCountDto> categoryRowMapper = (rs, rowNum) ->
            CategoryCountDto.builder()
                    .category(rs.getString("category"))
                    .count(rs.getInt("count"))
                    .build();

    @Override
    public List<ClothDto> findById(int id) {
        List<ClothDto> result;
        result = jdbcTemplate.query("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE id = "+id+" ORDER BY updated_date DESC"
                ,clothRowMapper);
        return result;
    }

    @Override
    public ClothDto findByClothId(int cloth_id) {
        ClothDto result;
        result = jdbcTemplate.queryForObject("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE cloth_id = "
                        +cloth_id,clothRowMapper);
        return result;
    }

    @Override
    public ClothDto save(CreateClothDto createClothDto) {
        jdbcTemplate.execute("INSERT INTO cloth(name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,id) VALUES('"+
                createClothDto.getName()+
                "','"+createClothDto.getSeason()+
                "','"+createClothDto.getCategory()+
                "','"+createClothDto.getBrand()+
                "','"+createClothDto.getPlace()+
                "','"+createClothDto.getSize()+
                "','"+createClothDto.getCloth_body()+
                "','"+createClothDto.getFile_name()+"', NOW(), NOW(), "+createClothDto.getId()+")");
        ClothDto clothDto = jdbcTemplate
                .queryForObject("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE name = '"
                                +createClothDto.getName()+"' and cloth_body = '"+createClothDto.getCloth_body() +"'",clothRowMapper);
        return clothDto;
    }

    @Override
    public ClothDto update(UpdateClothDto updateClothDto) {
        if(updateClothDto.getFile_name().equals("")) {
            jdbcTemplate.execute("UPDATE cloth SET name = '" + updateClothDto.getName()
                    + "', season = '" + updateClothDto.getSeason()
                    + "', category = '" + updateClothDto.getCategory()
                    + "', brand = '" + updateClothDto.getBrand()
                    + "', place = '" + updateClothDto.getPlace()
                    + "', size = '" + updateClothDto.getSize()
                    + "', cloth_body = '" + updateClothDto.getCloth_body()
                    + "', updated_date = NOW() WHERE cloth_id = "+updateClothDto.getCloth_id());
        }else{
            jdbcTemplate.execute("UPDATE cloth SET name = '"+ updateClothDto.getName()
                    + "', season = '"+updateClothDto.getSeason()
                    +"', category = '"+updateClothDto.getCategory()
                    +"', brand = '"+updateClothDto.getBrand()
                    +"', place = '"+updateClothDto.getPlace()
                    +"', size = '"+updateClothDto.getSize()
                    +"', cloth_body = '"+updateClothDto.getCloth_body()
                    +"', file_name = '"+updateClothDto.getFile_name()
                    +"', updated_date = NOW() WHERE cloth_id = "+updateClothDto.getCloth_id());
        }
        ClothDto result = jdbcTemplate.queryForObject("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE cloth_id = "
                +updateClothDto.getCloth_id(),clothRowMapper);
        return result;
    }

    @Override
    public String delete(int cloth_id) {
        jdbcTemplate.execute("DELETE FROM cloth WHERE cloth_id = "+cloth_id);
        return "삭제가 완료 되었습니다.";
    }

    @Override
    public ClothDto setFavorite(int cloth_id) {
        jdbcTemplate.execute("UPDATE cloth SET favorite = 1 WHERE cloth_id = "+cloth_id);
        ClothDto clothDto = jdbcTemplate
                .queryForObject("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE cloth_id = "
                        +cloth_id
                        ,clothRowMapper);
        return clothDto;
    }

    @Override
    public ClothDto removeFavorite(int cloth_id) {
        jdbcTemplate.execute("UPDATE cloth SET favorite = 0 WHERE cloth_id = "+cloth_id);
        ClothDto clothDto = jdbcTemplate
                .queryForObject("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE cloth_id = "
                                +cloth_id
                        ,clothRowMapper);
        return clothDto;
    }

    @Override
    public List<CategoryCountDto> countByCategory(int id) {
        List<CategoryCountDto> result;
        result = jdbcTemplate.query("SELECT category,count(cloth_id) as count from cloth WHERE id = "+id+" GROUP BY category ",categoryRowMapper);
        return result;
    }

    @Override
    public List<ClothDto> findBySeason(int id, String season) {
        List<ClothDto> result;
        result = jdbcTemplate.query("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE id = "
                +id+" and season LIKE '%"+season+"%' ORDER BY updated_date DESC",clothRowMapper);
        return result;
    }

    @Override
    public List<ClothDto> findByCategory(int id, String category) {
        List<ClothDto> result;
        result = jdbcTemplate.query("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE id = "
                +id+" and category = '"+category+"' ORDER BY updated_date DESC",clothRowMapper);
        return result;
    }

    @Override
    public List<ClothDto> findByFavorite(int id) {
        List<ClothDto> result;
        result = jdbcTemplate.query("SELECT cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth WHERE id = "
                +id+" and favorite = 1 ORDER BY updated_date DESC",clothRowMapper);
        return result;
    }

    @Override
    public int findWriterId(int cloth_id) {
        int writerId = jdbcTemplate.queryForObject("SELECT id FROM cloth WHERE cloth_id = "+cloth_id, Integer.class);
        return writerId;
    }
}
