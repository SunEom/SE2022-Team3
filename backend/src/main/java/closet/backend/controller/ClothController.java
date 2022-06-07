package closet.backend.controller;

import closet.backend.dto.cloth.ClothDto;
import closet.backend.req.cloth.*;
import closet.backend.service.ClothService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
public class ClothController {

    private final ClothService clothService;

    @PostMapping(value = "/cloth/create",consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity createCloth(@RequestPart CreateClothReq createClothReq, @RequestPart Optional<MultipartFile> img) throws FirebaseAuthException, IOException {
        ClothDto result =clothService.createCloth(createClothReq,img);
        return ResponseEntity.status(201).body(result);
    }

    @PostMapping(value = "/cloth/update",consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity updateCloth(@RequestPart UpdateClothReq updateClothReq, @RequestPart Optional<MultipartFile> img) throws FirebaseAuthException, IOException{
        ClothDto result = clothService.updateCloth(updateClothReq,img);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/delete")
    public ResponseEntity deleteCloth(@RequestBody DeleteClothReq deleteClothReq) throws FirebaseAuthException {
        String result = clothService.deleteCloth(deleteClothReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth")
    public ResponseEntity getCloth(@RequestBody Map<String, String> req) throws FirebaseAuthException {
        String idToken = req.get("idToken");
        List<ClothDto> result = clothService.getCloth(idToken);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/category")
    public ResponseEntity getClothByCategory(@RequestBody GetClothByCategoryReq getClothByCategoryReq) throws FirebaseAuthException {
        List<ClothDto> result = clothService.getClothByCategory(getClothByCategoryReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/season")
    public ResponseEntity getClothBySeason(@RequestBody GetClothBySeasonReq getClothBySeasonReq) throws FirebaseAuthException {
        List<ClothDto> result = clothService.getClothBySeason(getClothBySeasonReq);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/cloth/{cloth_id}")
    public ResponseEntity getClothDetail(@PathVariable int cloth_id){
        ClothDto result = clothService.getClothDetail(cloth_id);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/change_favorite")
    public ResponseEntity changeFavorite(@RequestBody ChangeFavoriteReq changeFavoriteReq) throws FirebaseAuthException {
        ClothDto result = clothService.changeFavorite(changeFavoriteReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth/favorite")
    public ResponseEntity getFavoriteCloth(@RequestBody Map<String, String> req) throws FirebaseAuthException {
        String idToken = req.get("idToken");
        List<ClothDto> result = clothService.getFavoriteCloth(idToken);
        return ResponseEntity.ok().body(result);
    }


}
