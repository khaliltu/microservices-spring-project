package tn.iit.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.Matiere;
import tn.iit.feign.UserFeignClient;
import tn.iit.feign.proxy.User;
import tn.iit.repository.MatiereRepository;

@RequiredArgsConstructor
@Service
public class MatiereService {
	
	private final MatiereRepository matiereRepository;
	private final UserFeignClient userFeignClient;
	
	public Optional<Matiere> getById(Long id) {
		return matiereRepository.findById(id);
	}
	
	public List<Matiere> getAll(){
		return matiereRepository.findAll();
	}
	
	public List<Matiere> getMatieresByIdProf(Long idProf){
		return matiereRepository.findByIdProf(idProf);
	}
	
	public List<Matiere> getMatieresByIdGroup(Long idGroup){
		return matiereRepository.findByIdProf(idGroup);
	}
	
	public Matiere save(Matiere matiere) {
		Optional<User> user = userFeignClient.getById(matiere.getIdProf());
		if(user.isPresent()) {
			return matiereRepository.save(matiere);
		}
		else {
			return null;
		}
	}
	
	public void deleteById(Long id) {
		matiereRepository.deleteById(id);
	}

}
