package tn.iit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.iit.entity.Matiere;

@Repository
public interface MatiereRepository extends JpaRepository<Matiere, Long>{

}
