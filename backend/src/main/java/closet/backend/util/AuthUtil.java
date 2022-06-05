package closet.backend.util;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;


@Component
public class  AuthUtil {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int getUserid(String token) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        String uid = decodedToken.getUid();
        int id = -1;
        id = jdbcTemplate.queryForObject("select id from user where uid = '"+uid+"'",Integer.class);
        return id;
    }

    public boolean isUser(String token) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        String uid = decodedToken.getUid();
        int id = -1;
        try{
            id = jdbcTemplate.queryForObject("select id from user where uid = '"+uid+"'",Integer.class);
            return true;
        }
        catch (IncorrectResultSizeDataAccessException e){
            return false;
        }
    }
}
