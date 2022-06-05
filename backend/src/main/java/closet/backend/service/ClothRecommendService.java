package closet.backend.service;


import closet.backend.util.AuthUtil;
import closet.backend.dao.ClothDao;
import closet.backend.dto.CategoryCountDto;
import closet.backend.dto.RecommendClothBySeasonDto;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Iterator;
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
        if(current.getMonth().equals(3) ||current.getMonth().equals(4) || current.getMonth().equals(5)){
            season = "봄";
            category = spring[rand.nextInt(spring.length)];
        }
        else if(current.getMonth().equals(6) ||current.getMonth().equals(7) || current.getMonth().equals(8)){
            season = "여름";
            category = summer[rand.nextInt(summer.length)];
        }
        else if(current.getMonth().equals(9) ||current.getMonth().equals(10) || current.getMonth().equals(11)){
            season = "가을";
            category = fall[rand.nextInt(fall.length)];
        }
        else if(current.getMonth().equals(12) ||current.getMonth().equals(1) || current.getMonth().equals(2)){
            season = "겨울";
            category = winter[rand.nextInt(winter.length)];
        }
        RecommendClothBySeasonDto recommendClothBySeasonDto = new RecommendClothBySeasonDto(season,category);
        return recommendClothBySeasonDto;
    }

    public CategoryCountDto recommendByCategory(String idToken) throws FirebaseAuthException {
        int id = authUtil.getUserid(idToken);
        List<CategoryCountDto> data = clothDao.countByCategory(id);
        int avg = 0;
        Iterator<CategoryCountDto> it = data.iterator();
        while(it.hasNext()){
            avg += it.next().getCount();
        }
        avg /= data.size();
        CategoryCountDto result = data.get(0);
        while(it.hasNext()){
            if(avg>=it.next().getCount()){
                result = it.next();
            }
        }
        return result;
    }

}
