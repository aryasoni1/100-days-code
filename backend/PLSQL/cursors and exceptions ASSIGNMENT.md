/*Cursors and Exceptions

Cursors

Practice 1
	
•	Write a PL/SQL block that takes a department number from a user and increases the salary of all the employees belonging to 
the department by 10%. The block should display on the screen how many records are updated.




SQL%ROWCOUNT is a special implicit cursor attribute in PL/SQL that stores the number of rows affected by the most recently executed
 SQL statement (INSERT, UPDATE, DELETE, or MERGE) within the current PL/SQL block or subprogram.
In the given code:
v_count := SQL%ROWCOUNT;

Create or replace procedure increase_salary_by_dept(p_deptno in emp.deptno%type) as
V_count_no number :=0;
Begin
Update emp
Set sal = sal*1.10 where deptno=p_deptno;
V_xount:=sql%rowcount;
DBMS_OUTPUT.PUT_LINE('Number of records updated: ' || v_count);

EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error updating salaries: ' || SQLERRM);
END;
/

-- Example usage:
BEGIN
    increase_salary_by_dept(10);  -- Increase salaries in department 10
END;*/

CREATE OR REPLACE PROCEDURE increase_salary_by_dept (p_deptno IN emp.deptno%TYPE)
AS
    v_count NUMBER := 0;
BEGIN
    UPDATE emp
    SET sal = sal * 1.10
    WHERE deptno = p_deptno;

    v_count := SQL%ROWCOUNT;
    DBMS_OUTPUT.PUT_LINE('Number of records updated: ' || v_count);

EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error updating salaries: ' || SQLERRM);
END;


-- Example usage:
BEGIN
    increase_salary_by_dept(10);  -- Increase salaries in department 10
END;

/*
Practice 2

•	Write a PL/SQL block to display the employee name, salary and their corresponding grades (by making use of the “salgrade” table) for
 the first five employees recorded in the “emp” table by making use of :
•	Simple for loop with “EXIT WHEN” condition
•	The “WHILE” condition
•	Cursor FOR LOOP 





Declare */
/*
Practice 3

•	Write a PL/SQL block that displays names and salaries of all CLERK’s recorded in the “emp” table by making use of a cursor.




Declare 
Cursor clerk_cur is select ename,sal from emp where job=’clerk’;
V_ename emp.ename%type;
V_sal emp.sal%type;
Begin
Open clerk_cur;
Loop
Fetch clerk_cur into v_ename,v_sal;
Exist when clerk_cur%notfound;
DBMS_OUTPUT.PUT_LINE('Name: ' || v_ename || ', Salary: ' || v_sal);
    END LOOP;
    CLOSE clerk_cur;
END;*/
DECLARE
    CURSOR clerk_cur IS
        SELECT ename, sal
        FROM emp
        WHERE job = 'CLERK';
    v_ename emp.ename%TYPE;
    v_sal   emp.sal%TYPE;
BEGIN
    OPEN clerk_cur;
    LOOP
        FETCH clerk_cur INTO v_ename, v_sal;
        EXIT WHEN clerk_cur%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE('Name: ' || v_ename || ', Salary: ' || v_sal);
    END LOOP;
    CLOSE clerk_cur;
END;

/*
Practice 4

•	Write a PL/SQL block that accepts a value of a job from user and displays the names, department numbers and salaries of the employees
 from the “emp” table having that job. The block makes use of a parameterized cursor. The user input is passed on to the cursor as a parameter. 



Declare
V_job emp.job%type := :job;
Cursor emp_cur(p_job emp.job%type) is 
Select ename,deptno,sal from emp where job=p_job;
Type emp_rec is record(
v_ename  emp.ename%TYPE,
    v_deptno emp.deptno%TYPE,
    v_sal    emp.sal%TYPE
);
R_emp emp_rec;
Begin
Open emp_cur(v_job);
Loop
Fetch emp_cur into r_emp;
Exist when emp_cur%notfound;
        DBMS_OUTPUT.PUT_LINE('Name: ' || r_emp.v_ename || ', Deptno: ' || r_emp.v_deptno || ', Salary: ' || r_emp.v_sal);
End loop;
Close emp_cur;
End;*/
DECLARE
    v_job emp.job%TYPE := :job_input; -- Get job from user
    CURSOR emp_cur (p_job emp.job%TYPE) IS
        SELECT ename, deptno, sal
        FROM emp
        WHERE job = p_job;
    v_ename  emp.ename%TYPE;
    v_deptno emp.deptno%TYPE;
    v_sal    emp.sal%TYPE;
BEGIN
    OPEN emp_cur(v_job);
    LOOP
        FETCH emp_cur INTO v_ename, v_deptno, v_sal;
        EXIT WHEN emp_cur%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE('Name: ' || v_ename || ', Deptno: ' || v_deptno || ', Salary: ' || v_sal);
    END LOOP;
    CLOSE emp_cur;
END;

SELECT job from emp;



/*
Practice 5

•	Write a PL/SQL block that updates the salaries of the employees as per the following rules. 
•	If the job is CLERK and deptno is 10 then increase the salary by 20%
•	If the job is MANAGER and deptno is 20 then increase the salary by 5%
•	For all the other cases increase the salary by 10%
The block makes use of a cursor for performing the updates and ensures that the appropriate locks are taken on the data retrieved by the 
cursor, as the data is to be updated. 




FOR UPDATE OF locks rows retrieved by a cursor to ensure data consistency during updates. WHERE CURRENT OF provides a convenient way to update or delete the row currently being processed by the cursor within a loop. They are often used together when you need to update data retrieved by a cursor.
•	Transaction Control: The locks acquired by FOR UPDATE are held until the end of the transaction (when you issue a COMMIT or ROLLBACK).
Declare
Cursor emp_cur is select empno,job,deptno,sal from emp for update of sal; -- Lock rows for update
v_empno  emp.empno%TYPE;
    v_job    emp.job%TYPE;
    v_deptno emp.deptno%TYPE;
    v_sal    emp.sal%TYPE;
begin
open emp_cur;
loop
fetch emp_cur into v_empno, v_job, v_deptno, v_sal;
        EXIT WHEN emp_cur%NOTFOUND;
IF v_job = 'CLERK' AND v_deptno = 10 THEN
            UPDATE emp SET sal = sal * 1.20 WHERE CURRENT OF emp_cur;
        ELSIF v_job = 'MANAGER' AND v_deptno = 20 THEN
            UPDATE emp SET sal = sal * 1.05 WHERE CURRENT OF emp_cur;
        ELSE
            UPDATE emp SET sal = sal * 1.10 WHERE CURRENT OF emp_cur;
        END IF;
    END LOOP;
    CLOSE emp_cur;
    COMMIT; -- Commit the changes
END;*/

DECLARE
    CURSOR emp_cur IS
        SELECT empno, job, deptno, sal
        FROM emp
        FOR UPDATE OF sal;  -- Lock rows for update
    v_empno  emp.empno%TYPE;
    v_job    emp.job%TYPE;
    v_deptno emp.deptno%TYPE;
    v_sal    emp.sal%TYPE;
BEGIN
    OPEN emp_cur;
    LOOP
        FETCH emp_cur INTO v_empno, v_job, v_deptno, v_sal;
        EXIT WHEN emp_cur%NOTFOUND;

        IF v_job = 'CLERK' AND v_deptno = 10 THEN
            UPDATE emp SET sal = sal * 1.20 WHERE CURRENT OF emp_cur;
            DBMS_OUTPUT.PUT_LINE('Updated salary for CLERK in Dept 10: Empno ' || v_empno);  -- Output updated row
        ELSIF v_job = 'MANAGER' AND v_deptno = 20 THEN
            UPDATE emp SET sal = sal * 1.05 WHERE CURRENT OF emp_cur;
            DBMS_OUTPUT.PUT_LINE('Updated salary for MANAGER in Dept 20: Empno ' || v_empno); -- Output updated row
        ELSE
            UPDATE emp SET sal = sal * 1.10 WHERE CURRENT OF emp_cur;
            DBMS_OUTPUT.PUT_LINE('Updated salary (other): Empno ' || v_empno);  -- Output updated row
        END IF;
    END LOOP;
    CLOSE emp_cur;
    COMMIT; -- Commit the changes
END;


/*
Practice 6   REF CUR

•	Write a PL/SQL block that retrieves information from the “dept” and “emp” table and displays it in the following format

Department Number :10		Department Name : XXXX
________________________________________________________
EMPLOYEE NUMBER 	 EMPLOYEE NAME	SALARY  	JOB

XXXXXX		XXXXXX		XXXX		XXXXX
XXXXXX		XXXXXX		XXXX		XXXXX
.........

Department Number :20		Department Name : XXXX
________________________________________________________
EMPLOYEE NUMBER 	 EMPLOYEE NAME	SALARY  	JOB

XXXXXX		XXXXXX		XXXX		XXXXX
XXXXXX		XXXXXX		XXXX		XXXXX
 	..............

    ......and so on for all the departments recorded in the “dept” table.
(Hint : In a loop, use a cursor to retrieve the deptno and the dname from the DEPT table, pass the deptno to a ref cursor to retrieve the required column values from the “EMP” table, for those employees who work in that department.)
*/
/*

Exceptions

Practice 7 

•	Create a table named MESSAGES (err_message VARCHAR2(250))
•	Write a PL/SQL block that accepts a salary value from a user and displays name of the employee having the salary value, on the screen. 
•	 If the salary entered returns more than one row, handle the exception with an appropriate Exception handler and insert into the MESSAGES
 table the message
 “ More than one employee with salary of <input salary>”
•	 If the salary entered does not return any  rows, handle the exception with an appropriate Exception handler and insert into the MESSAGES 
table the message
 “ No employee with salary of < input salary>”
•	 If the salary entered returns only one row, insert into the MESSAGES table the employees name 
•	 Handle any other exception with an appropriate Exception handler and insert into the MESSAGES table the message “ Some other error 
occurred”

*/


CREATE TABLE messages (err_message VARCHAR2(250));

DECLARE
    v_salary  emp.sal%TYPE := :salary_input;
    v_ename   emp.ename%TYPE;
BEGIN
    SELECT ename INTO v_ename FROM emp WHERE sal = v_salary;  -- This will raise NO_DATA_FOUND or TOO_MANY_ROWS
    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_ename);
    INSERT INTO messages (err_message) VALUES (v_ename);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        INSERT INTO messages (err_message) VALUES ('No employee with salary of ' || v_salary);
    WHEN TOO_MANY_ROWS THEN
        INSERT INTO messages (err_message) VALUES ('More than one employee with salary of ' || v_salary);
    WHEN OTHERS THEN
        INSERT INTO messages (err_message) VALUES ('Some other error occurred: ');
END;

select * from messages;



/*Practice 8

•	Write a PL/SQL block that accepts all the column values for dept table as user inputs and inserts a record in the dept table. The block should give a name DUPLICATE_DEPT to the error for duplicate value of the primary key, deptno. (Use pragma EXCEPTION_INIT) The block should write a handler for handling the exception fired when a duplicated value is entered for deptno. The handler should have code for displaying an appropriate message on the screen when DUPLICATE_DEPT is fired.

%TYPE is an anchor data type attribute. It means that the variable's data type is automatically based on
•	PRAGMA is a compiler directive. EXCEPTION_INIT associates a user-defined exception with a specific Oracle error number.
•	-00001 is the Oracle error number for a unique constraint violation (which occurs when you try to insert a duplicate primary key). This line links the duplicate_dept exception to this error.

LEARN THIS    PRAGMA

*/
DECLARE
    v_deptno dept.deptno%TYPE := :deptno_input;
    v_dname  dept.dname%TYPE := ':dname_input';
    v_loc    dept.loc%TYPE := ':loc_input';
    duplicate_dept EXCEPTION;
    PRAGMA EXCEPTION_INIT(duplicate_dept, -00001); -- Associate with ORA-00001 (unique constraint violation)
BEGIN
    INSERT INTO dept (deptno, dname, loc) VALUES (v_deptno, v_dname, v_loc);
    DBMS_OUTPUT.PUT_LINE('Department inserted successfully.');
    COMMIT;

EXCEPTION
    WHEN duplicate_dept THEN
        DBMS_OUTPUT.PUT_LINE('Error: Department number ' || v_deptno || ' already exists.');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
        ROLLBACK;
END;

/*Practice 9

•	Write a PL/SQL BLOCK to check for more than one President (Job column) in the “emp” table. Create a user defined exception named DUPLICATE_PRESIDENT that should be raised when more than one president is found in the “emp” table. The block should handle the exception by displaying a message “MORE THAN ONE PRESIDENT” on the screen.
*/
DECLARE
   duplicate_president EXCEPTION;
   v_count NUMBER;
BEGIN
   SELECT count(*) INTO v_count FROM emp WHERE job='PRESIDENT';
   IF v_count>1 then
      RAISE duplicate_president;
   END IF;
EXCEPTION
   WHEN duplicate_president THEN
      DBMS_OUTPUT.PUT_LINE('MORE THAN ONE PRESIDENT');
END;
select job from emp ;
/*Practice 10
•	Write a PL/SQL block that accepts the employee numbers of two employees as two user inputs empno1 and empno2. If empno1 exists in the “emp” table, then the block increases the salary of the employee by 10%. If empno2 exists in the “emp” table then the block increases his salary by 20%. The block should raise and handle the errors if empno1 or empno2 or both do not exist, by displaying the appropriate messages. Note that if empno1 does not exist but empno2 exists then the salary of empno2 must be increased. Also when both empno1 and empno2 do not exist then the error must be handled by the block.
*/
/*Developer Schema

Practice 11

•	Write a PL/SQL block that accepts all the column values for the “studies” table as user inputs and validates the following : 
•	The Developer exists (emp_id value is there in the “developer” table)
•	Institute and course combination exists (is there in the “course” table)
•	The Course status is valid. ( status is “V” in “course” table)
•	Start date is less than system date, but not lesser than 2 months from system date.
If all the validations are satisfied then the block should insert a record in the studies table and display a message on the screen “1 Record added”. The block should raise an exception and handle it by displaying an appropriate error message if a validation is not satisfied.
 */
/*					
Practice 12

•	Write a nested PL/SQL block that accepts all the column values except for the emp_id column, for the “developer” table, as user inputs in the outer block. The outer block also declares two exceptions “Invalid_DOJ” and “Check_DOB”. The inner block performs the following validations : 
•	The emp_id is autogenerated by making use of a sequence
•	DOJ should be greater than ’12-jan-1998’ otherwise the user defined exception “Invalid_DOJ” is raised
•	DOB should be greater than DOJ by 20 years otherwise the user defined exception “Check_DOB” is raised
•	If both the validations are satisfied then the inner block should insert a record in the “developer” table and display a message “1 Record added’”.
•	The outer block should handle the exceptions fired by the inner block by displaying the appropriate messages
W*/