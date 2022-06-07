package closet.backend.controller;

import closet.backend.dto.ClothDto;
import closet.backend.dto.ClothFolderDto;
import closet.backend.req.*;
import closet.backend.service.ClothFolderService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@Slf4j
@RequiredArgsConstructor
@RestController
public class ClothFolderController {

    private final ClothFolderService clothFolderService;

    @PostMapping("/cloth/folder/create")
    public ResponseEntity createFolder(@RequestBody CreateFolderReq createFolderReq) throws FirebaseAuthException {
        ClothFolderDto result = clothFolderService.createFolder(createFolderReq);
        return ResponseEntity.status(201).body(result);
    }

    @PostMapping("/cloth/folder/update")
    public ResponseEntity updateFolder(@RequestBody UpdateFolderReq updateFolderReq) throws FirebaseAuthException {
        ClothFolderDto result = clothFolderService.updateFolder(updateFolderReq);
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/cloth/folder/delete")
    public ResponseEntity deleteFolder(@RequestBody DeleteFolderReq deleteFolderReq) throws FirebaseAuthException {
        String result = clothFolderService.deleteFolder(deleteFolderReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/folder")
    public ResponseEntity getFolders(@RequestBody Map<String, String> req) throws FirebaseAuthException {
        String idToken = req.get("idToken");
        List<ClothFolderDto> result = clothFolderService.getFolder(idToken);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/folder/insert")
    public ResponseEntity insertClothInToFolder(@RequestBody ClothIntoFolderReq clothIntoFolderReq){
        ClothDto result = clothFolderService.insertClothToFolder(clothIntoFolderReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/folder/detail")
    public ResponseEntity getClothInFolder(@RequestBody ClothInFolderReq clothInFolderReq){
        List<ClothDto> result = clothFolderService.getClothInFolder(clothInFolderReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/folder/remove")
    public ResponseEntity deleteClothInFolder(@RequestBody DeleteClothInFolderReq deleteClothInFolderReq){
        String result = clothFolderService.deleteClothInFolder(deleteClothInFolderReq);
        return ResponseEntity.ok().body(result);
    }
}
