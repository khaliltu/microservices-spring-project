package tn.iit.feign.proxy;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class User {

	private Long id;
	private String mail;
	private String password;
	private String name;
	private String lastName;
	private Role role;
}