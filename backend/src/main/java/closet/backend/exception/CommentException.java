package closet.backend.exception;

import lombok.Getter;

@Getter
public class CommentException extends RuntimeException{
    public CommentException() {
    }

    public CommentException(String message) {
        super(message);
    }
}
