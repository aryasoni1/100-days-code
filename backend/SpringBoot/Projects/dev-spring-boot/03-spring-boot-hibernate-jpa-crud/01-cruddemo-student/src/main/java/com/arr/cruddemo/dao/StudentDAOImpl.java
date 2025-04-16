package com.arr.cruddemo.dao;

import com.arr.cruddemo.enitity.Student;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public class StudentDAOImpl implements StudentDAO{
    //deine field for entity manager

    private EntityManager entityManager;
    //inject entity manaegr using constructor injection
     @Autowired
    public StudentDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    //implemenet save method
    @Override
    @Transactional
    public void save(Student theStudent) {
         entityManager.persist(theStudent);

    }
}
