package tn.iit.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.Login;
import tn.iit.entity.User;
import tn.iit.service.UserService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/home")
public class AuthentificationController {
	
	private final UserService userService;
	
	@PostMapping("/login")
	public User logIn(@RequestBody Login login) {
		Optional<User> user = userService.getByMail(login.getMail());
		if(user.isPresent()) {
			User actualUser= user.get();
			if (actualUser.getPassword().equals(login.getPassword())) {
				actualUser.setPassword("******");
				return actualUser;
			}
		}
		return null;
	}
}
