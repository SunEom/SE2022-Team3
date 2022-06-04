package closet.backend.controller;

import closet.backend.dto.ChangeFavoriteDto;
import closet.backend.dto.ClothDto;
import closet.backend.dto.GetClothBySeasonDto;
import closet.backend.req.*;
import closet.backend.service.ClothService;
import closet.backend.service.PostService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class ClothController {

    private final ClothService clothService;

    @PostMapping("/cloth/create")
    public ResponseEntity createCloth(@RequestBody CreateClothReq createClothReq) throws FirebaseAuthException, IOException {
        ClothDto result =clothService.createCloth(createClothReq);
        return ResponseEntity.status(201).body(result);
    }

    @PostMapping("/cloth/update")
    public ResponseEntity updateCloth(@RequestBody UpdateClothReq updateClothReq){
        return null;
    }

    @PostMapping("/cloth/delete")
    public ResponseEntity deleteCloth(DeleteClothReq deleteClothReq) throws FirebaseAuthException {
        String result = clothService.deleteCloth(deleteClothReq);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/cloth")
    public ResponseEntity getCloth(@RequestBody String idToken) throws FirebaseAuthException {
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
    public ResponseEntity getFavoriteCloth(@RequestBody String idToken) throws FirebaseAuthException {
        List<ClothDto> result = clothService.getFavoriteCloth(idToken);
        return ResponseEntity.ok().body(result);
    }


}
