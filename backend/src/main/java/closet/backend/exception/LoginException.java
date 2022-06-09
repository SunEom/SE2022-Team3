package closet.backend.exception;

import lombok.Getter;

@Getter
public class LoginException extends RuntimeException{
    private int code;
    public LoginException() {
    }
    public LoginException(String message, int code) {
        super(message);
        this.code = code;
    }
}
