package closet.backend;

import closet.backend.dao.user.UserDao;
import closet.backend.dto.user.UserDto;
import closet.backend.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class JDBCTemplateTest {
    @Autowired
    UserDao userDao;

    private User insertUser, insertUser2, insertUser3;

    @BeforeEach
    public void init() {
    }

    @Test
    public void userSave() {
        System.out.println();
    }

    @Test
    public void findUserById() {
        UserDto user = userDao.findById(1);
        System.out.println(user);
    }

    @Test
    public void findAllUsers() {
        System.out.println(userDao.findAll());
    }

}
