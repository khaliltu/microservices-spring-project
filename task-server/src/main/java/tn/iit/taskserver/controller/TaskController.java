package tn.iit.taskserver.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.iit.taskserver.entity.Task;
import tn.iit.taskserver.service.TaskService;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/tasks")
public class TaskController {
    private final TaskService taskService;

    @GetMapping
    public List<Task> getAll() {
        return taskService.getAll();
    }



    @GetMapping("/{id}")
    public Optional<Task> getById(@PathVariable Long id) {
        return taskService.getById(id);
    }

    @PostMapping
    public Task save(@RequestBody Task task) {
        return taskService.save(task);
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
