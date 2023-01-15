package tn.iit.taskserver.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class FileUploadService {
	public static void saveFile(MultipartFile multipartFile) {
		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
		Path uploadDirectory = Paths.get("files");

		try (InputStream inputStream = multipartFile.getInputStream()) {
			Path filePath = uploadDirectory.resolve(fileName);
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException ioe) {
			log.error("Error saving uploaded file [{}]", fileName);
		}
	}
}