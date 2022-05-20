package closet.backend.exception;

public class UserException extends RuntimeException{
    public UserException(){
    }

    public UserException(String massage){
        super(massage);
    }
}
