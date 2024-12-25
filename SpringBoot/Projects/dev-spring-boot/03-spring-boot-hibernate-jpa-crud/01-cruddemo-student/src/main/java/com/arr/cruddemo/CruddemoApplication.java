package com.arr.cruddemo;

import com.arr.cruddemo.dao.StudentDAO;
import com.arr.cruddemo.enitity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CruddemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CruddemoApplication.class, args);
	}
    @Bean
	public CommandLineRunner commandLineRunner(StudentDAO studentDAO){

		return runner->{
			//createStudent(studentDAO);
			createMultipleStudents(studentDAO);
		};
	}

	private void createMultipleStudents(StudentDAO studentDAO) {

		//create multiple students

		System.out.println("creating new 3student object");
		Student tempStudent1= new Student("JOHN","Doe","arr.com");
		Student tempStudent2= new Student("MARY","Doe","arr.com");
		Student tempStudent3= new Student("GUN","Doe","arr.com");


		//save the student objects
		System.out.println("saving the 3student");
		studentDAO.save(tempStudent1);
		studentDAO.save(tempStudent2);
		studentDAO.save(tempStudent3);



	}

	private void createStudent(StudentDAO studentDAO) {
		//create the student object
		System.out.println("creating new student object");
		Student tempStudent= new Student("Paul","Doe","arr.com");
		//save the student object
		System.out.println("saving the student");
		studentDAO.save(tempStudent);

		//display id of the saved student
		System.out.println("saved student. generated id:"+tempStudent.getId());
	}
}
