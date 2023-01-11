package tn.iit.taskserver.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.iit.taskserver.entity.Task;
import tn.iit.taskserver.repository.TaskRepository;

import java.util.List;
import java.util.Optional;

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


    public Task save(Task task) {
        return taskRepository.save(task);
    }

    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }

}
