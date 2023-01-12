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
import tn.iit.entity.User;
import tn.iit.service.UserService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

	private final UserService userService;

	@GetMapping
	public List<User> getAll() {
		return userService.getAll();
	}

	@GetMapping("/{id}")
	public Optional<User> getById(@PathVariable Long id) {
		return userService.getById(id);
	}

	@PostMapping
	public User save(@RequestBody User user) {
		return userService.save(user);
	}

	@PutMapping
	public ResponseEntity<User> update(@RequestBody User user) {
		if (userService.getById(user.getId()).isPresent()) {
			userService.save(user);
			return ResponseEntity.ok(user);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}

	@DeleteMapping
	public ResponseEntity<Long> delete(@RequestBody User user) {
		Long id = user.getId();
		if (userService.getById(id).isPresent()) {
			userService.deleteById(id);
			return ResponseEntity.ok(id);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}

}
