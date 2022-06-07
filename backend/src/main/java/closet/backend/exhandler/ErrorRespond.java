package closet.backend.exhandler;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Data
@Getter
@AllArgsConstructor
public class ErrorRespond{
    private int code;
    private String massage;
}
