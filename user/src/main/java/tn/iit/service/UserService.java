package tn.iit.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.User;
import tn.iit.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	public Optional<User> getByMail(String mail){
		return userRepository.findByMail(mail);
	}
	
	public Optional<User> getById(Long id) {
		return userRepository.findById(id);
	}
	
	public List<User> getAll(){
		return userRepository.findAll();
	}
	
	public User save(User user) {
		return userRepository.save(user);
	}
	
	public void deleteById(Long id) {
		userRepository.deleteById(id);
	}

}
