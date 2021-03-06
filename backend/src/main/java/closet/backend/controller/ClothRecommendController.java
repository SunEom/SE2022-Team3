package closet.backend.controller;

import closet.backend.dto.cloth.CategoryCountDto;
import closet.backend.dto.cloth.RecommendClothBySeasonDto;
import closet.backend.service.ClothRecommendService;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
public class ClothRecommendController {
    private final ClothRecommendService clothRecommendService;

    @PostMapping("/recommend/category")
    public ResponseEntity recommendByCategory(@RequestBody Map<String, String> req) throws FirebaseAuthException {
        String idToken = req.get("idToken");
        CategoryCountDto result = clothRecommendService.recommendByCategory(idToken);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/recommend/season")
    public ResponseEntity recommendBySeason(){
        RecommendClothBySeasonDto result = clothRecommendService.recommendBySeason();
        return ResponseEntity.ok().body(result);
    }

}
