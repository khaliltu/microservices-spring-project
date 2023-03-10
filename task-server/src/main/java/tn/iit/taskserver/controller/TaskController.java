package tn.iit.taskserver.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import tn.iit.taskserver.entity.Task;
import tn.iit.taskserver.service.TaskService;


@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("api/tasks")
public class TaskController {
	
    private final TaskService taskService;

    @GetMapping
    public List<Task> getAll() {
        return taskService.getAll();
    }
    
    @GetMapping("/profs/{idProf}")
    public List<Task> getAllByIdProf(@PathVariable Long idProf) {
    	return taskService.getAllbyIdProf(idProf);
    }



    @GetMapping("/{id}")
    public Optional<Task> getById(@PathVariable Long id) {
        return taskService.getById(id);
    }
    
    @PostMapping
    public Task save(@RequestBody Task task) {
        return taskService.save(task);
    }
    
    @PostMapping("/files")
    public String saveTaskFile(@RequestBody MultipartFile document) {
    	return taskService.saveTaskFile(document);
    }
    
    @PutMapping
    public ResponseEntity<Task> update(@RequestBody Task task) {
        if (taskService.getById(task.getId()).isPresent()) {
            taskService.save(task);
            return ResponseEntity.ok(task);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @DeleteMapping
    public ResponseEntity<Long> delete(@RequestBody Long id) {
        if (taskService.getById(id).isPresent()) {
            taskService.deleteById(id);
            return ResponseEntity.ok(id);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

}
