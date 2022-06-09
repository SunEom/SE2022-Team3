package closet.backend.exception;

import lombok.Getter;

@Getter
public class PostException extends RuntimeException{
    private int code;
    public PostException() {
    }
    public PostException(String message, int code) {
        super(message);
        this.code = code;
    }
}
