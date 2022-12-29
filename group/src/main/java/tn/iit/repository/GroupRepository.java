package tn.iit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.iit.entity.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long>{
	
}
