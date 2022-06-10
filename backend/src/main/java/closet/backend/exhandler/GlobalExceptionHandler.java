package closet.backend.exhandler;

import closet.backend.exception.*;
import com.google.firebase.auth.AuthErrorCode;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;
import java.sql.SQLIntegrityConstraintViolationException;
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
    protected ResponseEntity handleIOException(IOException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message","FILE_UPLOAD_FAIL");
        return ResponseEntity.status(500).body(result);
    }

    @ExceptionHandler(value = {UserException.class})
    protected ResponseEntity handleUserException(UserException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message",e.getMessage());
        return ResponseEntity.status(e.getCode()).body(result);
    }

    @ExceptionHandler(value = {PostException.class})
    protected ResponseEntity handlePostException(PostException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message",e.getMessage());
        return ResponseEntity.status(e.getCode()).body(result);
    }

    @ExceptionHandler(value = {LoginException.class})
    protected ResponseEntity handleLoginException(LoginException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message",e.getMessage());
        return ResponseEntity.status(e.getCode()).body(result);
    }

    @ExceptionHandler(value = {CommentException.class})
    protected ResponseEntity handleCommentException(CommentException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message",e.getMessage());
        return ResponseEntity.status(e.getCode()).body(result);
    }

    @ExceptionHandler(value = {ClothException.class})
    protected ResponseEntity handleClothException(ClothException e){
        Map<String, String> result = new HashMap<String, String>();
        result.put("message",e.getMessage());
        return ResponseEntity.status(e.getCode()).body(result);
    }

    @ExceptionHandler(value = {SQLIntegrityConstraintViolationException.class})
    protected ResponseEntity handleFolderException(SQLIntegrityConstraintViolationException e){
        Map<String, String> result = new HashMap<String, String>();
        String message = "";
        if(e.getErrorCode() == 1062){
            message = "이미 분류에 추가 되어 있는 의상입니다!";
        }
        result.put("message",message);
        return ResponseEntity.status(400).body(result);
    }
}
