package closet.backend.Util;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


@Repository
public class  AuthUtil {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int getUserid(String uid) throws FirebaseAuthException{
        //FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        //String uid = decodedToken.getUid();
        int id = -1;
        id = jdbcTemplate.queryForObject("select id from user where uid = '"+uid+"'",Integer.class);
        return id;
    }

    public boolean isUser(String uid) throws FirebaseAuthException{
        //FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        //String uid = decodedToken.getUid();
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
