package closet.backend.util;

import lombok.NoArgsConstructor;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.*;
import java.nio.file.Files;

@NoArgsConstructor
@Component
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
