package closet.backend.req.cloth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Data
@Getter
@ToString
public class GetClothBySeasonReq {

    private String idToken;
    private String season;
}
