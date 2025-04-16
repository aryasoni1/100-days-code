package com.arr.springcoredemo.common;

public class SwimCoach implements Coach{
    public SwimCoach(){
        System.out.println("In consturctor:"+getClass().getSimpleName());
    }
    @Override
    public String getDailyWorkout() {
        return "Swim 100m";
    }
}
