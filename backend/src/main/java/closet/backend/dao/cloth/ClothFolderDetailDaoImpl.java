package closet.backend.dao.cloth;

import closet.backend.dto.cloth.ClothDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClothFolderDetailDaoImpl implements ClothFolderDetailDao{

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

    @Override
    public ClothDto save(int folder_id, int cloth_id) {
        jdbcTemplate.execute("INSERT INTO cloth_folder_detail(folder_id,cloth_id) VALUES ("
                +folder_id+","+cloth_id+")");
        ClothDto result = jdbcTemplate.queryForObject("SELECT * FROM cloth WHERE cloth_id = "+cloth_id,clothRowMapper);
        return result;
    }

    @Override
    public String delete(int folder_id, int cloth_id) {
        jdbcTemplate.execute("DELETE FROM cloth_folder_detail WHERE folder_id = "+folder_id+" and cloth_id = "+cloth_id);
        return "삭제가 완료 되었습니다.";
    }

    @Override
    public List<ClothDto> getDetails(int folder_id) {
        List<ClothDto> result = jdbcTemplate
                .query("SELECT cloth.cloth_id,name,season,category,brand,place,size,cloth_body,file_name,created_date,updated_date,favorite,id FROM cloth LEFT JOIN cloth_folder_detail on cloth.cloth_id = cloth_folder_detail.cloth_id WHERE folder_id = "+folder_id,clothRowMapper);
        return result;
    }
}
