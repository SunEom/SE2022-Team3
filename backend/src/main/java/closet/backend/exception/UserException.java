package closet.backend.exception;

import lombok.Getter;

@Getter
public class UserException extends RuntimeException{
    private int code;
    public UserException(){
    }

    public UserException(String massage, int code){
        super(massage);
        this.code = code;
    }
}
