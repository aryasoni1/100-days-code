/*Subprograms and Packages

Subprograms (Procedures and Functions)

Practice 1

•	Create a procedure called USER_QUERY_EMP that accepts three 
parameters. Parameter p_myeno is of IN parameter mode which 
provides the empno value. The other two parameters p_myjob and 
p_mysal are of OUT mode. The procedure retrieves the salary and 
job of an employee with the provided employee number and assigns
 those to the two OUT parameters respectively. The procedure 
 should handle the error if the empno does not exist in the EMP 
 table by displaying an appropriate message. Use bind variables 
 for the two OUT Parameters.
•	Compile the code, invoke the procedure, and display the 
salary and job title for employee number 7839. Do the same for
 employee number 7123.
*/
CREATE OR REPLACE PROCEDURE user_query_emp(
    p_myeno IN emp.empno%TYPE,p_myjob OUT emp.job%TYPE,
    p_mysal OUT emp.sal%TYPE)
    AS
    BEGIN
    SELECT sal,job INTO p_myjob,p_mysal FROM emp WHERE 
    empno=p_myeno;
    EXCEPTION 
    WHEN NO_DATA_FOUND THEN 
    DBMS_OUTPUT.PUT_LINE('EMPLOYEE'||p_myeno||'not found');
    END;

    DECLARE
    v_job emp.job%TYPE;
    v_sal emp.sal%TYPE;
    BEGIN
    user_query_emp(1001,v_job,v_sal);
    DBMS_OUTPUT.PUT_LINE('Empno: 7839, Job: ' 
    || v_job || ', Salary: ' || v_sal);
    user_query_emp(7788,v_job,v_sal);
    DBMS_OUTPUT.PUT_LINE('Empno: 7839, Job: ' 
    || v_job || ', Salary: ' || v_sal);
    END;
    SELECT empno,job,sal from emp;



/*
Practice 2

•	Create a function named USER_ANNUAL_COMP that has three parameters p_eno, p_sal and p_comm for passing on the values of an employee number, the current salary and commission of the employee respectively. The function calculates and returns the annual compensation of the employee by using the following formula.
     annual_compensation =  (p_sal+p_comm)*12
      If the salary or commission value is NULL then zero should be substituted for it. 
•	Give a call to USER_ANNUAL_COMP from a SELECT statement, against the EMP table.
*/
CREATE OR REPLACE FUNCTION USER_ANNUAL_COMP (
    p_eno IN emp.empno%TYPE,
    p_sal IN emp.sal%TYPE,
    p_comm IN emp.comm%TYPE)
    RETURN NUMBER AS 
    v_annual_comp NUMBER;
    BEGIN
    v_annual_comp := (NVL(p_sal,0)+NVL(p_comm,0))*12;
    RETURN v_annual_comp;
    END;
SELECT empno,ename,user_annual_comp(empno,sal,comm) AS annual_compensation
FROM emp;
/*
Practice 3

•	Create a function named USER_VALID_DEPTNO that has a single parameter p_dno to accept a department number and returns a BOOLEAN value. The function returns TRUE if the department number exists in the DEPT table else it returns FALSE.
•	Create a procedure named SHOW_STRENGTH that accepts department number in a single parameter p_deptno from user. The procedure gives a call to USER_VALID_DEPTNO. If the function returns TRUE then the procedure finds out how many employees are there in the department from the EMP table and displays the same on the screen. If the function returns FALSE then the procedure displays an appropriate error message.
•	Give call to SHOW_STRENGTH by passing on department number 10. Do the same for department number 76
*/
CREATE OR REPLACE FUNCTION user_valid_deptno(p_dno dept.deptno%TYPE)
RETURN BOOLEAN AS v_count NUMBER;
BEGIN
SELECT COUNT(*) INTO v_count FROM dept WHERE deptno=p_dno;
RETURN v_count>0;
END;

CREATE OR REPLACE PROCEDURE show_strength(p_deptno dept.deptno%TYPE)
AS v_emp_count NUMBER;
BEGIN
IF user_valid_deptno(p_deptno) THEN
SELECT COUNT(*) INTO v_emp_count FROM emp WHERE deptno=p_deptno;
DBMS_OUTPUT.PUT_LINE('no of employees'||v_emp_count);
ELSE
DBMS_OUTPUT.PUT_LINE('error');
END IF;
END;

BEGIN
show_strength(10);
show_strength(76);
END;

/*
Practice 4

•	Create a procedure named SHOW_RECORDS that accepts a single parameter p_join_date. The procedure determines and displays on the screen, the details of the employees who have joined after p_join_date, in the following format. 
Employees Joined after ddth, Month yyyy

EMPLOYEE NAME		JOB		SALARY		DEPARTMENT 
_____________________________________________________________

XXXXXXXX			XXXXX	99,999		  99
XXXXXXXX			XXXXX	99,999		  99



The procedure should display appropriate message if there is no employee who joined after p_join_date .
•	Give a call to SHOW_RECORDS from an anonymous PL/SQL block 
*/
CREATE OR REPLACE PROCEDURE show_records (p_join_date IN DATE)
AS
CURSOR emp_cur IS 
SELECT ename,job,sal,deptno 
FROM emp 
WHERE hiredate>p_join_date;
    v_ename  emp.ename%TYPE;
    v_job    emp.job%TYPE;
    v_sal    emp.sal%TYPE;
    v_deptno emp.deptno%TYPE;
    v_count  NUMBER := 0;  -- To count employees
BEGIN
    DBMS_OUTPUT.PUT_LINE('Employees Joined after ' || TO_CHAR(p_join_date, 'ddth, Month yyyy'));
    DBMS_OUTPUT.PUT_LINE('EMPLOYEE NAME             JOB                SALARY             DEPARTMENT');
    DBMS_OUTPUT.PUT_LINE('_____________________________________________________________');
OPEN emp_cur;
LOOP
FETCH emp_cur INTO v_ename,v_job,v_sal,v_deptno;
EXIT WHEN emp_cur%NOTFOUND;
DBMS_OUTPUT.PUT_LINE(rpad(v_ename,25)||rpad(v_job,20)||rpad(v_sal,15)||v_deptno);
v_count := v_count+1;
END LOOP;
CLOSE emp_cur;

IF v_count=0 THEN
DBMS_OUTPUT.PUT_LINE('no employee joined after'||to_char(p_join_date,'ddth,Month yyyy'));
END IF;
END;

BEGIN
show_records(DATE '1981-06-01');
END;


select * from emp;
/*
Practice 5

•	Create a procedure named ADD_EMPLOYEE to hire an employee. Parameters to the procedure are job, mgr, hiredate, salary, commission and deptno. Validate the following:

a. Employee number is not taken as a parameter but is auto generated by using a SEQUENCE. 
b. Job is either ‘CLERK’ or ‘ANALYST’ or ‘SALESMAN’. The input value can be entered in any case (upper or lower or initcap).
c. Mgr is an existing employee.
d. Hiredate is less than system date.
e. Salary must be greater than 800
f. Commission is not null if the job is SALESMAN. For any other job, commission is null.
g. Deptno must exist in the DEPT table.
Insert the record if the above validations are met and display a message ‘1 row inserted’. If the row is not inserted generate an exception and handle it by displaying an appropriate message. 
•	Give a call to ADD_EMPLOYEE through an anonymous PL/SQL block
*/
CREATE SEQUENCE emp_seq START WITH 8000; -- Assuming empno starts from 8000

CREATE OR REPLACE PROCEDURE add_employee (
    p_job IN emp.job%TYPE,
    p_mgr IN emp.mgr%TYPE,
    p_hiredate IN emp.hiredate%TYPE,
    p_sal IN emp.sal%TYPE,
    p_comm IN emp.comm%TYPE,
    p_deptno IN emp.deptno%TYPE)
    AS
    v_empno emp.empno%TYPE;
    e_invalid_job EXCEPTION;
    e_invalid_mgr EXCEPTION;
    e_invalid_hiredate EXCEPTION;
    e_invalid_sal EXCEPTION;
    e_invalid_comm EXCEPTION;
    e_invalid_dept EXCEPTION;
    BEGIN
    --Validations
    IF UPPER(p_job) NOT IN ('CLERK','ANALYST','SALESMAN') THEN
    RAISE e_invalid_job;
    END IF;

    BEGIN 
        SELECT 1 INTO v_empno FROM emp WHERE empno=p_mgr;
        EXCEPTION 
        WHEN NO_DATA_FOUND THEN
           RAISE e_invalid_mgr;
    END;

    IF p_hiredate > SYSDATE  THEN
       RAISE e_invalid_hiredate;
    END IF;

    IF p_sal<800 THEN
       RAISE e_invalid_sal;
    END IF;

    IF UPPER(p_job)='SALESMAN' AND p_comm IS NULL THEN
     RAISE e_invalid_comm;
    ELSIF UPPER(p_job)!='SALESMAN' AND p_comm IS NOT NULL THEN
      RAISE e_invalid_comm;
    END IF;

    BEGIN
     SELECT 1 INTO v_empno FROM dept WHERE deptno=p_deptno;
     EXCEPTION
      WHEN NO_DATA_FOUND THEN
       RAISE e_invalid_dept;
    END;

    v_empno := emp_seq.NEXTVAL;
    INSERT INTO emp (empno, job, mgr, hiredate, sal, comm, deptno)
    VALUES (v_empno, p_job, p_mgr, p_hiredate, p_sal, p_comm, p_deptno);

    DBMS_OUTPUT.PUT_LINE('1 row inserted.  New Empno: ' || v_empno);
    COMMIT;

    EXCEPTION

    WHEN e_invalid_job THEN
        DBMS_OUTPUT.PUT_LINE('Error: Invalid job.');
        ROLLBACK;
    WHEN e_invalid_mgr THEN
        DBMS_OUTPUT.PUT_LINE('Error: Invalid manager ID.');
        ROLLBACK;
    WHEN e_invalid_hiredate THEN
        DBMS_OUTPUT.PUT_LINE('Error: Hire date cannot be in the future.');
        ROLLBACK;
    WHEN e_invalid_sal THEN
        DBMS_OUTPUT.PUT_LINE('Error: Salary must be greater than 800.');
        ROLLBACK;
    WHEN e_invalid_comm THEN
        DBMS_OUTPUT.PUT_LINE('Error: Commission must be NULL unless job is SALESMAN.');
        ROLLBACK;
    WHEN e_invalid_dept THEN
        DBMS_OUTPUT.PUT_LINE('Error: Invalid department number.');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
        ROLLBACK;
END;

BEGIN
    add_employee('clerk', 7839, SYSDATE - 1, 1200, NULL, 10); -- Example
END;


/*
Practice 6

•	Create a function named FIND_SAL_GRADE which accepts salary of an employee finds the corresponding salary grade from SALGRADE table and returns the grade. The function should raise an exception if the salary value does not fit in any of the salary ranges specified in the salgrade table.
•	Create a procedure CALL_FIND_SAL_GRADE that does not accept any parameter. The procedure gives call to FIND_SAL_GRADE for each record in the emp table by passing on the salary value from the current record. The procedure displays the corresponding employee number, employee name and the salary grade returned by FIND_SAL_GRADE, on the screen. The procedure should handle error thrown by the function by displaying an appropriate message.
•	Give a call to CALL_FIND_SAL_GRADE through an anonymous PL/SQL block 
*/
DECLARE
    e_salary_not_found EXCEPTION;
CREATE OR REPLACE FUNCTION find_sal_grade(p_sal IN emp.sal%TYPE)
RETURN NUMBER AS
v_grade SALGRADE.grade%TYPE;

BEGIN
SELECT grade INTO v_grade FROM salgrade WHERE p_sal BETWEEN
losal AND hisal;
RETURN v_grade;
EXCEPTION
 WHEN NO_DATA_FOUND THEN
   RAISE e_sal_out_range;
END;

CREATE OR REPLACE PROCEDURE call_find_sal_grade
AS
CURSOR emp_cur IS 
SELECT empno,ename,sal from emp;
v_empno emp.empno%TYPE;
v_ename emp.ename%TYPE;
v_sal emp.sal%TYPE;
v_grade NUMBER;
e_sal_out_range EXCEPTION;
BEGIN
OPEN emp_cur;
LOOP
FETCH emp_cur INTO v_empno,v_ename,v_sal;
EXIT WHEN emp_cur%NOTFOUND;
BEGIN
v_grade := find_sal_grade(v_sal);
DBMS_OUTPUT.PUT_LINE('Empno: ' || v_empno || 
', Name: ' || v_ename || ', Grade: ' || v_grade);
EXCEPTION
    WHEN e_sal_out_range THEN
        RAISE e_salary_not_found; -- Re-raise as global exception
END;
END LOOP;
CLOSE emp_cur;
EXCEPTION
    WHEN e_salary_not_found THEN  -- Handle the global exception
            DBMS_OUTPUT.PUT_LINE('Empno: ' || v_empno || ', Name: ' || v_ename || ': Salary out of range.');
        WHEN OTHERS THEN  -- Keep WHEN OTHERS for other unexpected errors
            DBMS_OUTPUT.PUT_LINE('An unexpected error occurred in call_find_sal_grade: ' || SQLERRM);
END;

BEGIN
 call_find_sal_grade;
END;

CREATE OR REPLACE FUNCTION find_sal_grade(p_sal IN emp.sal%TYPE)
RETURN NUMBER AS
    v_grade salgrade.grade%TYPE;
    e_sal_out_range EXCEPTION;
BEGIN
    SELECT grade INTO v_grade FROM salgrade WHERE p_sal BETWEEN losal AND hisal;
    RETURN v_grade;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE e_sal_out_range;
END;
/

CREATE OR REPLACE PROCEDURE call_find_sal_grade AS
    CURSOR emp_cur IS SELECT empno, ename, sal FROM emp;
    v_empno emp.empno%TYPE;
    v_ename emp.ename%TYPE;
    v_sal   emp.sal%TYPE;
    v_grade NUMBER;
BEGIN
    OPEN emp_cur;
    LOOP
        FETCH emp_cur INTO v_empno, v_ename, v_sal;
        EXIT WHEN emp_cur%NOTFOUND;

        BEGIN  -- Inner block to handle the exception
            v_grade := find_sal_grade(v_sal);
            DBMS_OUTPUT.PUT_LINE('Empno: ' || v_empno || ', Name: ' || v_ename || ', Grade: ' || v_grade);
        EXCEPTION
            WHEN e_sal_out_range THEN  -- Handle the specific exception
                DBMS_OUTPUT.PUT_LINE('Empno: ' || v_empno || ', Name: ' || v_ename || ': Salary out of range.');
        END; -- End of inner block

    END LOOP;
    CLOSE emp_cur;
END;
/

BEGIN
    call_find_sal_grade;
END;

/*
PACKAGES

Practice 7

•	Create a package named MANAGE_EMP_PACK that has two public procedures, two package level variables and a private function. The public procedure HIRE_EMP adds an employee record in EMP table and the public procedure FIRE_EMP deletes an employee record from the EMP table. The two variables v_insert_cnt and v_delete_cnt are used in the package, for keeping record of the numbers of times insert / delete has been executed. 
Create a private function VALIDATE_EMP in the package to validate employee number. This function can be called from HIRE_EMP and FIRE_EMP.
•	The function VALIDATE_EMP accepts an employee number in a parameter p_eno and returns TRUE if the value of employee number exists in the EMP table else it returns FALSE.
•	The procedure HIRE_EMP takes all the column values of the EMP table as parameters. It gives a call to VALIDATE_EMP by passing on the value of employee number and if the function returns TRUE then it displays message ‘Employee number already in use’. If the function returns FALSE then it inserts a new record in the EMP table and displays a message ‘One employee added’. It also increments the value of v_insert_cnt by 1.
•	The procedure FIRE_EMP accepts an employee number as a parameter and gives a call to VALIDATE_EMP by passing on the value of employee number. If the function returns TRUE then it deletes the corresponding record from the EMP table, displays message ‘One employee deleted’ and increments the value of v_delete_cnt by 1. If the function returns FALSE then it displays message ‘Wrong employee number’.
•	Check working of the methods in MANAGE_EMP_PACK by giving calls to the public procedures and by displaying value of the appropriate package variable, through an anonymous block 
*/
CREATE OR REPLACE PACKAGE manage_emp_pack AS
v_insert_cnt NUMBER := 0;
v_delete_cnt NUMBER := 0;
PROCEDURE hire_emp (
        p_empno  IN emp.empno%TYPE,
        p_ename  IN emp.ename%TYPE,
        p_job    IN emp.job%TYPE,
        p_mgr    IN emp.mgr%TYPE,
        p_hiredate IN emp.hiredate%TYPE,
        p_sal    IN emp.sal%TYPE,
        p_comm   IN emp.comm%TYPE,
        p_deptno IN emp.deptno%TYPE
    );

    PROCEDURE fire_emp (p_empno IN emp.empno%TYPE);
END manage_emp_pack;

CREATE OR REPLACE PACKAGE BODY manage_emp_pack 
AS
FUNCTION validate_emp(p_eno emp.empno%TYPE) RETURN BOOLEAN
AS
v_count NUMBER;
BEGIN
SELECT COUNT(*) INTO v_count FROM emp WHERE empno=p_eno;
RETURN v_count>0;
END;
PROCEDURE hire_emp (
    p_empno  IN emp.empno%TYPE,
    p_ename  IN emp.ename%TYPE,
    p_job    IN emp.job%TYPE,
    p_mgr    IN emp.mgr%TYPE,
    p_hiredate IN emp.hiredate%TYPE,
    p_sal    IN emp.sal%TYPE,
    p_comm   IN emp.comm%TYPE,
    p_deptno IN emp.deptno%TYPE
) AS
BEGIN
IF validate_emp(p_empno) THEN
  DBMS_OUTPUT.PUT_LINE('Employee number already in use');
ELSE
  INSERT INTO emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
  VALUES (p_empno, p_ename, p_job, p_mgr, p_hiredate, p_sal, p_comm, p_deptno);
  DBMS_OUTPUT.PUT_LINE('ONE Employee ADDED');
  v_insert_cnt := v_insert_cnt+1;
END IF;
END;

PROCEDURE fire_emp(p_empno emp.empno%TYPE)
AS
BEGIN
 IF validate_emp(p_empno) THEN
            DELETE FROM emp WHERE empno = p_empno;
            v_delete_cnt := v_delete_cnt + 1;
            DBMS_OUTPUT.PUT_LINE('One employee deleted.');
        ELSE
            DBMS_OUTPUT.PUT_LINE('Wrong employee number.');
        END IF;
END;
END manage_emp_pack;

BEGIN
    manage_emp_pack.hire_emp(9000, 'New Hire', 'Clerk', 7839, SYSDATE, 1000, NULL, 20);
    manage_emp_pack.fire_emp(7369);  -- Example: firing an existing employee

    DBMS_OUTPUT.PUT_LINE('Insert Count: ' || manage_emp_pack.v_insert_cnt);
    DBMS_OUTPUT.PUT_LINE('Delete Count: ' || manage_emp_pack.v_delete_cnt);
END;

/*

Practice 8

•	Create a package named MY_EMP_PACK having two overloaded functions named GET_AVG_SAL. The first function accepts ename as a parameter while the second function accepts empno as a parameter and both return the average salary paid in the department to which the employee belongs.  Both the functions should handle the exception for non-existing employee by displaying an appropriate error message.
•	Give a call to GET_AVG_SAL through an anonymous PL/SQL block by passing on employee number 7839. Do the same again by passing on employee name ‘KING’. 
*/
CREATE OR REPLACE PACKAGE my_emp_pack AS
FUNCTION get_avg_sal(p_enmae IN emp.ename%TYPE) RETURN NUMBER;
FUNCTION get_avg_sal(p_empno IN emp.empno%TYPE) RETURN NUMBER;
END my_emp_pack;

CREATE OR REPLACE PACKAGE BODY my_emp_pack AS
    -- FUNCTION get_avg_sal (p_ename IN emp.ename%TYPE) RETURN NUMBER AS
    --     v_avg_sal NUMBER;
    --     v_deptno  emp.deptno%TYPE;
    --     e_emp_not_found EXCEPTION;
    -- BEGIN
    --     SELECT deptno INTO v_deptno FROM emp WHERE ename = p_ename;
    --     SELECT AVG(sal) INTO v_avg_sal FROM emp WHERE deptno = v_deptno;
    --     RETURN v_avg_sal;
    -- EXCEPTION
    --     WHEN NO_DATA_FOUND THEN
    --         DBMS_OUTPUT.PUT_LINE('Error: Employee with name "' || p_ename || '" not found.');
    --         RETURN -1;
    -- END get_avg_sal;

    FUNCTION get_avg_sal (p_empno IN emp.empno%TYPE) RETURN NUMBER AS  -- Implementation for p_empno
        v_avg_sal NUMBER;
        v_deptno  emp.deptno%TYPE;
        e_emp_not_found EXCEPTION;
    BEGIN
        SELECT deptno INTO v_deptno FROM emp WHERE empno = p_empno;
        SELECT AVG(sal) INTO v_avg_sal FROM emp WHERE deptno = v_deptno;
        RETURN v_avg_sal;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            DBMS_OUTPUT.PUT_LINE('Error: Employee with ID ' || p_empno || ' not found.');
            RETURN -1;
    END get_avg_sal;

END my_emp_pack;

SELECT object_name, object_type, status
FROM user_objects
WHERE object_type = 'PACKAGE';
DBMS_SESSION.RESET_PACKAGE;
-- Calling the overloaded functions:
BEGIN
    DBMS_OUTPUT.PUT_LINE('Average salary for employee 7839: ' || my_emp_pack.get_avg_sal(7839));
    DBMS_OUTPUT.PUT_LINE('Average salary for employee KING: ' || my_emp_pack.get_avg_sal('KING')); -- Case-insensitive
END;



/*

Developer Schema

Practice 9

•	Create a function named CALCULATE_ROYALTY that takes a single parameter p_emp_id. The function accepts the employee number of a developer and calculates and returns the royalty that the developer has got so far, for the software he/she has developed. Royalty is 10% of software cost, for each copy of the software sold. The function should return -1 if the developer does not exist. It should return -2 if the developer has not developed any software or the software developed by him/her have not been sold so far.
•	Create a procedure named SHOW_ROYALTY that takes employee number of a developer as a parameter and gives a call to the function CALCULATE_ROYALTY by passing on the employee number value. The procedure should display on the screen the royalty value returned by the function. The procedure should display the appropriate messages when the developer does not exist or when the developer has not developed any software or the software developed by him/her have not been sold so far.
•	Give a call to SHOW_ROYALTY through an anonymous PL/SQL block.


*/
select * from developer;
desc user_table;
SELECT COUNT(*) AS table_count
FROM user_tables;
SELECT owner, table_name
FROM all_tables;
SELECT table_name
FROM user_tables;



CREATE OR REPLACE FUNCTION calculate_royalty(
    p_emp_id IN developer.empid%TYPE)
RETURN NUMBER AS
ROYALTY NUMBER;
BEGIN




Practice 10

•	Create a procedure FIND_COURSE_CREDITS that accepts an employee number as a parameter. The procedure then finds out the total of the study duration in months, for the developer, for all the courses studied by the developer. (Hint: make use of the “course” and “Studies” tables). The procedure displays on the screen the employee number of the developer along with the calculated total of the study duration for the developer.It should handle all the probable errors by displaying the appropriate messages.
•	Give a call to FIND_COURSE_CREDITS through an anonymous PL/SQL block.

Practice 11

•	Create a package named DEVELOPER_PACK having two overloaded functions named FIND_NO_JOINED. The first function accepts a month as a parameter in the MON format (e. g. ‘NOV’) while the second function accepts a month in the MM format (e. g. 11). Both the functions, return the number of developers who joined in that month. Both the functions should handle all possible errors by displaying appropriate messages and should return -1 in case of error situation.
•	Give a call to FIND_NO_JOINED through an anonymous PL/SQL block by passing on a month in the MON format. Do the same again by passing on a month in the MM format. The calling block should display the value returned by the function on the screen or should display an appropriate message in case of an error situation.
