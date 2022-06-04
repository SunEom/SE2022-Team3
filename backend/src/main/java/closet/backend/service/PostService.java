package closet.backend.service;

import closet.backend.Util.AuthUtil;
import closet.backend.Util.FileUtil;
import closet.backend.dao.FavoritePostDao;
import closet.backend.dao.PostDao;
import closet.backend.dto.*;
import closet.backend.exception.PostException;
import closet.backend.exception.UserException;
import closet.backend.req.ChangeFavoriteReq;
import closet.backend.req.ChangePostFavoriteReq;
import closet.backend.req.CreatePostReq;
import closet.backend.req.DeletePostReq;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class PostService {

    @Autowired
    private final PostDao postDao;
    @Autowired
    private final FavoritePostDao favoritePostDao;
    @Autowired
    private final AuthUtil authUtil;
    @Autowired
    private final FileUtil fileUtil;

    public PostDto createPost(CreatePostReq createPostReq) throws FirebaseAuthException, IOException {
        int id = authUtil.getUserid(createPostReq.getIdToken());
        String file_name;
        if(createPostReq.getFile().isPresent()){
            MultipartFile convertedFile = fileUtil.convertFile(createPostReq.getFile().get());
            file_name = fileUtil.uploadFile(convertedFile);
        }else{
            file_name = "";
        }
        CreatePostDto createPostDto = new CreatePostDto(id, createPostReq.getTitle(), createPostReq.getGenre(), createPostReq.getPost_body(), file_name);
        PostDto postDto = postDao.save(createPostDto);
        return postDto;
    }

    public String deletePost(DeletePostReq deletePostReq) throws FirebaseAuthException{
        int id = authUtil.getUserid(deletePostReq.getIdToken());
        if(id == postDao.findWriterId(deletePostReq.getPost_id())){
            String result = postDao.delete(deletePostReq.getPost_id());
            return result;
        } else{
            throw new PostException("글 작성자가 아닙니다.");
        }
    }

    public PostDto updatePost(int post_id) {

        return null;
    }

    public PostDetailDto getPostDetail(int post_id,String idToken) throws FirebaseAuthException{
        int id = authUtil.getUserid(idToken);
        PostDetailDto result = postDao.findByPostId(post_id, id);
        return result;
    }

    public List<PostDtoWithCommentCount> getPostByGenre(String genre){
        List<PostDtoWithCommentCount> result = postDao.findByGenre(genre);
        return result;
    }

    public List<PostDtoWithCommentCount> getPosts(){
        List<PostDtoWithCommentCount> result = postDao.findAll();
        return result;
    }

    public PostDetailDto changeFavorite(ChangePostFavoriteReq changePostFavoriteReq) throws FirebaseAuthException{
        int id = authUtil.getUserid(changePostFavoriteReq.getIdToken());
        ChangePostFavoriteDto changePostFavoriteDto = new ChangePostFavoriteDto(id, changePostFavoriteReq.getPost_id(), changePostFavoriteReq.getFavorite());
        PostDetailDto result;
        if(changePostFavoriteDto.getFavorite() == 1){
            result = favoritePostDao.removeFavorite(changePostFavoriteDto.getPost_id(), changePostFavoriteDto.getId());
        } else{
            result = favoritePostDao.setFavorite(changePostFavoriteDto.getPost_id(), changePostFavoriteDto.getId());
        }
        return result;
    }

}
