package closet.backend;

import closet.backend.util.AuthUtil;
import com.google.firebase.auth.FirebaseAuthException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AuthUtilTest {

    @Autowired
    AuthUtil authUtil;
    @Test
    public void getUserIdTest() throws FirebaseAuthException {
        System.out.println("isUser : "+authUtil.isUser("TEST"));
    }
}
