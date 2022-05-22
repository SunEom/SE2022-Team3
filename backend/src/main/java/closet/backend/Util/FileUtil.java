package closet.backend.Util;

import lombok.NoArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
@NoArgsConstructor
public class FileUtil {
    public String uploadFile(MultipartFile inputFile) throws IOException{
        String uploadedFileName = RandomStringUtils.randomAlphabetic(32)+".jpg";;
        String fileUrl = "D:\\SMU\\소프트웨어 공학\\project\\SE2022-Team3\\backend\\src\\main\\resources\\static\\img\\";
        File uploadedFile = new File(fileUrl+uploadedFileName);;
        uploadedFile.getParentFile().mkdirs();
        inputFile.transferTo(uploadedFile);
        return uploadedFileName;
    }
}
