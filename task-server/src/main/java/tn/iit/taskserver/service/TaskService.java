package tn.iit.taskserver.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import tn.iit.taskserver.entity.Task;
import tn.iit.taskserver.repository.TaskRepository;

@RequiredArgsConstructor
@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public Optional<Task> getById(Long id) {
        return taskRepository.findById(id);
    }

    public List<Task> getAll(){
        return taskRepository.findAll();
    }
    
    public List<Task> getAllbyIdProf(Long idProf){
    	return taskRepository.findByIdProf(idProf);
    }


    public String saveTaskFile(MultipartFile multipartFile) {
    	FileUploadService.saveFile(multipartFile);
    	String documentUrl = "files/"+StringUtils.cleanPath(multipartFile.getOriginalFilename());
        return documentUrl;
    }
    
    public Task save(Task task) {
    	Date date = new Date();
    	task.setDateDepot(date);
    	task.setState(false);
        return taskRepository.save(task);
    }

    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }

}
