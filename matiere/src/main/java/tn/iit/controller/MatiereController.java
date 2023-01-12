package tn.iit.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.iit.entity.Matiere;
import tn.iit.service.MatiereService;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("api/matieres")
public class MatiereController {

	private final MatiereService matiereService;

	@GetMapping
	public List<Matiere> getAll() {
		return matiereService.getAll();
	}

	@GetMapping("/profs/{idProf}")
	public List<Matiere> getAllByIdProf(@PathVariable Long idProf) {
		return matiereService.getMatieresByIdProf(idProf);
	}

	@GetMapping("/groups/{idGroup}")
	public List<Matiere> getAllByIdGroup(@PathVariable Long idGroup) {
		return matiereService.getMatieresByIdProf(idGroup);
	}

	@GetMapping("/{id}")
	public Optional<Matiere> getById(@PathVariable Long id) {
		return matiereService.getById(id);
	}

	@PostMapping
	public Matiere save(@RequestBody Matiere matiere) {
		return matiereService.save(matiere);
	}

	@PutMapping
	public ResponseEntity<Matiere> update(@RequestBody Matiere matiere) {
		if (matiereService.getById(matiere.getId()).isPresent()) {
			matiereService.save(matiere);
			return ResponseEntity.ok(matiere);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}

	@DeleteMapping
	public ResponseEntity<Long> delete(@RequestBody Long id) {
		if (matiereService.getById(id).isPresent()) {
			matiereService.deleteById(id);
			return ResponseEntity.ok(id);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}

}
