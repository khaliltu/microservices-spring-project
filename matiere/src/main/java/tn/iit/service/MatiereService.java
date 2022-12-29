package tn.iit.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.Matiere;
import tn.iit.repository.MatiereRepository;

@RequiredArgsConstructor
@Service
public class MatiereService {
	
	private final MatiereRepository matiereRepository;
	
	public Optional<Matiere> getById(Long id) {
		return matiereRepository.findById(id);
	}
	
	public List<Matiere> getAll(){
		return matiereRepository.findAll();
	}
	
	public List<Matiere> getMatieresByIdProf(Long idProf){
		return matiereRepository.findByIdProf(idProf);
	}
	public Matiere save(Matiere matiere) {
		return matiereRepository.save(matiere);
	}
	
	public void deleteById(Long id) {
		matiereRepository.deleteById(id);
	}

}
