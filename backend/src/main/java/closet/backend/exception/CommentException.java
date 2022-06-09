package closet.backend.exception;

import lombok.Getter;

@Getter
public class CommentException extends RuntimeException{
    private int code;
    public CommentException() {
    }

    public CommentException(String message, int code) {
        super(message);
        this.code = code;
    }
}
