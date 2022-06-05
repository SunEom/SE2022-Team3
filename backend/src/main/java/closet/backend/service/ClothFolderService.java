package closet.backend.service;

import closet.backend.util.AuthUtil;
import closet.backend.dao.ClothDao;
import closet.backend.dao.ClothFolderDao;
import closet.backend.dao.ClothFolderDetailDao;
import closet.backend.dto.*;
import closet.backend.req.*;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ClothFolderService {
    private final AuthUtil authUtil;
    private final ClothDao clothdao;
    private final ClothFolderDao clothFolderDao;
    private final ClothFolderDetailDao clothFolderDetailDao;


    public ClothFolderDto createFolder(CreateFolderReq createFolderReq) throws FirebaseAuthException {
        int id = authUtil.getUserid(createFolderReq.getIdToken());
        CreateFolderDto createFolderDto = new CreateFolderDto(id,createFolderReq.getFolderName());
        ClothFolderDto result = clothFolderDao.save(createFolderDto);
        return result;
    }

    public ClothFolderDto updateFolder(UpdateFolderReq updateFolderReq) throws FirebaseAuthException{
        int id = authUtil.getUserid(updateFolderReq.getIdToken());
        UpdateFolderDto updateFolderDto = new UpdateFolderDto(id, updateFolderReq.getFolder_id(), updateFolderReq.getFolderName());
        ClothFolderDto result = clothFolderDao.update(updateFolderDto);
        return result;
    }

    public String deleteFolder(DeleteFolderReq deleteFolderReq) throws FirebaseAuthException{
        int id = authUtil.getUserid(deleteFolderReq.getIdToken());
        String result = clothFolderDao.delete(deleteFolderReq.getFolder_id());
        return result;
    }

    public List<ClothFolderDto> getFolder(String idToken) throws FirebaseAuthException{
        int id = authUtil.getUserid(idToken);
        List<ClothFolderDto> result = clothFolderDao.getFolder(id);
        return result;
    }

    public ClothDto insertClothToFolder(ClothIntoFolderReq clothIntoFolderReq){
        int folder_id = clothIntoFolderReq.getFolder_id();
        int cloth_id = clothIntoFolderReq.getCloth_id();
        ClothDto result = clothFolderDetailDao.save(folder_id,cloth_id);
        return result;
    }

    public String deleteClothInFolder(DeleteClothInFolderReq deleteClothInFolderReq){
        int folder_id = deleteClothInFolderReq.getFolder_id();
        int cloth_id = deleteClothInFolderReq.getCloth_id();
        String result = clothFolderDetailDao.delete(folder_id,cloth_id);
        return result;
    }

    public List<ClothDto> getClothInFolder(ClothInFolderReq clothInFolderReq){
        int folder_id = clothInFolderReq.getFolder_id();
        List<ClothDto> result = clothFolderDetailDao.getDetails(folder_id);
        return result;
    }

}
