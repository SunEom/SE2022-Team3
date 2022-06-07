package closet.backend.exhandler;

import closet.backend.exception.LoginException;
import com.google.firebase.auth.AuthErrorCode;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {FirebaseAuthException.class})
    protected ResponseEntity handleFirebaseAuthException(FirebaseAuthException e){
        AuthErrorCode authErrorCode = e.getAuthErrorCode();
        Map<String, AuthErrorCode> result = new HashMap<String, AuthErrorCode>();
        result.put("message",authErrorCode);
        return ResponseEntity.status(500).body(result);
    }

    @ExceptionHandler(value = {IOException.class})
    protected ResponseEntity handleFirebaseAuthException(IOException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message","FILE_UPLOAD_FAIL");
        return ResponseEntity.status(500).body(result);
    }

}
