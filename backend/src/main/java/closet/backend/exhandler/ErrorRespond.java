package closet.backend.exhandler;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class ErrorRespond{
    private int code;
    private String massage;
    
    public static ErrorRespond of(HttpStatus httpStatus, String massage){
        return new ErrorRespond(httpStatus.value(),massage);
    }
}
