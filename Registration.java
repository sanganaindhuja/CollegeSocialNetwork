package com.collegesocialnetwork.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="registration")
public class Registrationform {
	@Id
	@Column(name="registration_id")
	private int id;

	public Registrationform() {
		super();
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Registrationform [id=" + id + "]";
	}
	

	
	


}
