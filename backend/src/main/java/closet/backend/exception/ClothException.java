package closet.backend.exception;

public class ClothException extends RuntimeException{
    public ClothException() {
    }

    public ClothException(String message) {
        super(message);
    }
}
