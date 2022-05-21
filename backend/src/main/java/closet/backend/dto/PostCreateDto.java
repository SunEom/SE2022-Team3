package closet.backend.dto;

import closet.backend.entity.User;

public class PostCreateDto {
    private int post_id;
    private String title;
    private String genre;
    private String post_body;
    private String file_name;
    private User user;
}
