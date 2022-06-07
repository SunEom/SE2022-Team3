package closet.backend.dao;

import closet.backend.dto.ClothFolderDto;
import closet.backend.dto.CreateFolderDto;
import closet.backend.dto.UpdateFolderDto;
import closet.backend.req.UpdateFolderReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClothFolderDaoImpl implements ClothFolderDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final RowMapper<ClothFolderDto> folderRowMapper = (rs, rowNum) ->
            ClothFolderDto.builder()
                    .folder_id(rs.getInt("folder_id"))
                    .folder_name(rs.getString("folder_name"))
                    .id(rs.getInt("id"))
                    .build();

    @Override
    public ClothFolderDto save(CreateFolderDto createFolderDto) {
        int id = createFolderDto.getId();
        String folder_name = createFolderDto.getFolder_name();
        jdbcTemplate.execute("INSERT INTO cloth_folder(id,folder_name) VALUES ("+id+", '"+folder_name+"')");
        ClothFolderDto result = jdbcTemplate.queryForObject("SELECT * FROM cloth_folder WHERE id = "+id+" and folder_name = '"+folder_name+"'",folderRowMapper);
        return result;
    }

    @Override
    public ClothFolderDto update(UpdateFolderDto updateFolderDto) {
        int id = updateFolderDto.getId();
        int folder_id = updateFolderDto.getFolder_id();
        String folder_name = updateFolderDto.getFolderName();
        jdbcTemplate.execute("UPDATE cloth_folder SET folder_name = '"+folder_name+"' WHERE folder_id = "+folder_id);
        ClothFolderDto result = jdbcTemplate.queryForObject("SELECT * FROM cloth_folder WHERE folder_id = "+folder_id,folderRowMapper);
        return result;
    }

    @Override
    public String delete(int folder_id) {
        jdbcTemplate.execute("DELETE FROM cloth_folder WHERE folder_id = "+folder_id);
        return "삭제가 완료 되었습니다.";
    }

    @Override
    public List<ClothFolderDto> getFolder(int id) {
        List<ClothFolderDto> result =
                jdbcTemplate.query("SELECT * FROM cloth_folder WHERE id = "+id,folderRowMapper);
        return result;
    }
}
