package closet.backend.exception;

import lombok.Getter;

@Getter
public class ClothException extends RuntimeException{
    public ClothException() {
    }

    public ClothException(String message) {
        super(message);
    }
}
