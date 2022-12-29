package tn.iit.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.Group;
import tn.iit.repository.GroupRepository;

@RequiredArgsConstructor
@Service
public class GroupService {

	private final GroupRepository groupRepository;

	public Optional<Group> getGroupById(Long id) {
		return groupRepository.findById(id);
	}

	public List<Group> getAll() {
		return groupRepository.findAll();
	}

	public Group save(Group group) {
		return groupRepository.save(group);
	}

	public void deleteById(Long id) {
		groupRepository.deleteById(id);
	}

}
