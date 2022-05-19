package closet.backend.exhandler;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorRespond{
    private int code;
    private String massage;
}
