package closet.backend.exception;

import lombok.Getter;

@Getter
public class PostException extends RuntimeException{
    public PostException() {
    }
    public PostException(String message) {
        super(message);
    }
}
