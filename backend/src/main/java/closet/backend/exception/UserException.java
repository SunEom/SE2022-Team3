package closet.backend.exception;

import lombok.Getter;

@Getter
public class UserException extends RuntimeException{

    public UserException(){
    }

    public UserException(String massage){
        super(massage);
    }
}
