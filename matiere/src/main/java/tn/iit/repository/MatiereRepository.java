package tn.iit.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.iit.entity.Matiere;

@Repository
public interface MatiereRepository extends JpaRepository<Matiere, Long>{
	
	public List<Matiere> findByIdProf(Long idProf);

}
