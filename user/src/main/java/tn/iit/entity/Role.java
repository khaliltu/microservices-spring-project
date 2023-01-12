package tn.iit.entity;

public enum Role {
	ADMIN("ADMIN"), AGENT("AGENT"), PROFESSOR("PROFESSOR");

	private String role;

	Role(String role) {
		this.role = role;
	}

	public String getRole() {
		return this.role;
	}
}