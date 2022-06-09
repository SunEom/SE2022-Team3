package closet.backend.exception;

import lombok.Getter;

@Getter
public class ClothException extends RuntimeException{
    private int code;
    public ClothException() {
    }

    public ClothException(String message, int code) {
        super(message);
        this.code = code;
    }
}
