package tn.iit.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.Group;
import tn.iit.service.GroupService;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/groups")
public class GroupController {

	private final GroupService groupService;

	@GetMapping
	public List<Group> getAll() {
		return groupService.getAll();
	}

	@GetMapping("/{id}")
	public Optional<Group> getById(@PathVariable Long id) {
		return groupService.getGroupById(id);
	}

	@PostMapping
	public Group save(@RequestBody Group group) {
		return groupService.save(group);
	}

	@PutMapping
	public ResponseEntity<Group> update(@RequestBody Group group) {
		if (groupService.getGroupById(group.getId()).isPresent()) {
			groupService.save(group);
			return ResponseEntity.ok(group);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}

	@DeleteMapping
	public ResponseEntity<Long> delete(@RequestBody Long id) {
		if (groupService.getGroupById(id).isPresent()) {
			groupService.deleteById(id);
			return ResponseEntity.ok(id);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
}
