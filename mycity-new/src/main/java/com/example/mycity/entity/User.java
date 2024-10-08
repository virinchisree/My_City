 package com.example.mycity.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotBlank(message = "Name is required")
    @Size(min = 2, message = "Name must have at least 2 characters")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Name has only letters and spaces")
    @Column(name = "name")
    private String name;

    @NotBlank(message = "Email is required")
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\\.com$", message = "Email must be a valid")
    @Column(name = "email")
    private String email;


   @NotBlank(message = "Password is required")

@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{7,}$", 
         message = "Password needs  7+ characters with alphanumeric.")
@Column(name = "password")
private String password;

    



@NotBlank(message = "Mobile number is required")
@Pattern(regexp = "^(?!0{10})\\d{10}$", message = "Mobile number must be valid")
@Column(name = "mobile")
private String mobile;


    @Column(name = "address")
    private String address;


    public User(){

    }

    public User(String address, String email, int id, String mobile, String name, String password) {
        this.address = address;
        this.email = email;
        this.id = id;
        this.mobile = mobile;
        this.name = name;
        this.password = password;
      
     
    }


    public int getId(){
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
  
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
   

    
    
   /*  public boolean isPasswordMatching() {
        return this.password != null && this.password.equals(this.cofmpwd);
    } */
    
    
}

