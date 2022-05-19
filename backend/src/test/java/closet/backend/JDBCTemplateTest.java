package closet.backend;

import closet.backend.dao.UserDao;
import closet.backend.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class JDBCTemplateTest {
    @Autowired
    UserDao userDao;

    private User insertUser, insertUser2, insertUser3;

    @BeforeEach
    public void init() {
        insertUser = User.builder()
                .uid("first")
                .nickname("first_name")
                .age(20)
                .sex("male")
                .build();
        insertUser2 = User.builder()
                .uid("second")
                .nickname("second_name")
                .age(10)
                .sex("female")
                .build();
        insertUser3 = User.builder()
                .uid("third")
                .nickname("third_name")
                .age(10)
                .sex("male")
                .build();
    }

    @Test
    public void userSave() {
        System.out.println();
    }

    @Test
    public void findUserById() {
        List<User> user = userDao.findById(1);
        System.out.println(user);
    }

    @Test
    public void findAllUsers() {
        System.out.println(userDao.findAll());
    }

}
