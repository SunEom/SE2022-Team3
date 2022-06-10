package closet.backend.service;


import closet.backend.exception.ClothException;
import closet.backend.util.AuthUtil;
import closet.backend.dao.cloth.ClothDao;
import closet.backend.dto.cloth.CategoryCountDto;
import closet.backend.dto.cloth.RecommendClothBySeasonDto;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

@Service
@Slf4j
@RequiredArgsConstructor
public class ClothRecommendService {

    private final AuthUtil authUtil;
    private final ClothDao clothDao;

    public RecommendClothBySeasonDto recommendBySeason(){
        LocalDate current = LocalDate.now();
        Random rand = new Random();
        String season="";
        String category="";
        String[] spring = {"가디건","후드","맨투맨","청바지","자켓"};
        String[] summer = {"반팔","반바지","수영복"};
        String[] fall = {"가디건","후드","맨투맨","청바지","자켓","코트"};
        String[] winter = {"패딩","코트","청바지","후드"};
        int month = current.getMonth().getValue();
        if(month == 3 || month == 4 || month == 5){
            season = "봄";
            category = spring[rand.nextInt(spring.length)];
        }
        else if(month == 6 || month == 7 || month == 8){
            season = "여름";
            category = summer[rand.nextInt(summer.length)];
        }
        else if(month == 9 || month == 10 || month == 11){
            season = "가을";
            category = fall[rand.nextInt(fall.length)];
        }
        else if(month == 12 || month == 1 || month == 2){
            season = "겨울";
            category = winter[rand.nextInt(winter.length)];
        }
        RecommendClothBySeasonDto recommendClothBySeasonDto = new RecommendClothBySeasonDto(season,category);
        return recommendClothBySeasonDto;
    }

    public CategoryCountDto recommendByCategory(String idToken) throws FirebaseAuthException {
        int id = authUtil.getUserId(idToken);
        List<CategoryCountDto> data = clothDao.countByCategory(id);
        try {
            CategoryCountDto result = data.get(0);
            for (int i = 0; i < data.size(); i++) {
                if (result.getCount() >= data.get(i).getCount())
                    result = data.get(i);
            }
            return result;
        } catch(IndexOutOfBoundsException e){
            throw new ClothException("추가된 의상이 존재하지 않습니다.",400);
        }
    }

}
