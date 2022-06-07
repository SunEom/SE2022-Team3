package closet.backend.exhandler;

import closet.backend.exception.LoginException;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {FirebaseAuthException.class})
    protected ResponseEntity handleFirebaseAuthException(FirebaseAuthException e){
        String message = "Firebase ID token has expired.";
        Map<String, String> result = new HashMap<String, String>();
        result.put("message",message);
        return ResponseEntity.status(500).body(result);
    }

}
