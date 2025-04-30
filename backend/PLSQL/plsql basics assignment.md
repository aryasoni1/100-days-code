/*PL/SQL Basics

Practice 1:
     
 Evaluate each of the following declarations.
 Determine which of them are not legal and explain why?

a.	DECLARE    v_id NUMBER(4);
     b.  DECLARE    v_x , v_y,  v_z  VARCHAR2(10);
     c.  DECLARE   v_birthdate DATE NOT NULL;
     d.  DECLARE   v_in_stock   BOOLEAN :=1;  

-- Practice 1: Evaluating Declarations

-- a. Valid
DECLARE
    v_id NUMBER(4);
BEGIN
    NULL; -- Placeholder as DECLARE blocks need a BEGIN...END
END;
/

-- b. Valid
DECLARE
    v_x, v_y, v_z VARCHAR2(10);
BEGIN
    NULL;
END;
/

-- c. Valid
DECLARE
    v_birthdate DATE NOT NULL; 
BEGIN
    v_birthdate := SYSDATE; -- Must initialize NOT NULL variables
END;
/

-- d. Invalid.  BOOLEAN cannot be directly assigned a numeric value (1).
-- Correct:
DECLARE
    v_in_stock BOOLEAN := TRUE;
BEGIN
    NULL;
END;
/
*/
/*Practice 2: What will be the output of the following program?

	DECLARE
		v_data NUMBER(7);
	BEGIN
		DBMS_OUTPUT.PUT_LINE(v_data);
	END;

ANS=NOTHING no value initialized 
-- Output: A blank line (or a null value representation depending on your environment).

Practice 3:

     DECLARE
      	   v_weight NUMBER (3):=600;
             v_message VARCHAR2(255):=‘Product 10012’;

     BEGIN
 		DECLARE
      			v_weight NUMBER(3) :=1;
      			v_message VARCHAR2 (25):=‘Product 11001’;
      			v_new_locn VARCHAR2(25):=‘Europe’;
   		BEGIN
    			v_weight := v_weight +1;
  			v_new_locn:=‘Western ‘ ||v_new_locn; 
			--  Point 1     weight=2  message=product 11001 newlocn=western Europe(The || operator in PL/SQL (and SQL) is the string concatenation operator. It's used to join two or more strings together.)

END; 
v_weight:=v_weight + 1;
v_message:=v_message|| ‘ is in stock’;
-- Point 2  weight=601 message=product 10012 is in stock newlocn=doesn’t exist
   END; 

Consider the above PL/SQL code. What will be the values of the variables v_weight, v_message and v_new_locn at point 1 and point 2
 At Point 1:
-- v_weight (inner): 2      (Incremented by 1 within the inner block)
-- v_message (inner): 'Product 11001'
-- v_new_locn (inner): 'Western Europe'

-- At Point 2:
-- v_weight (outer): 601    (Incremented by 1 in the outer block)
-- v_message (outer): 'Product 10012 is in stock'
-- v_new_locn: Does not exist at this point (it was local to the inner block).*/

/*Practice 4:  

Write a PL/SQL block that accepts values of two non zero integer numbers from user. The block performs the following operation 
( first_number/second_number + second_number). The result of the operation should be stored in a PL/SQL variable and also displayed
 on the screen.


The / symbol in PL/SQL (and most programming languages) represents the division operator. It's used to divide one number by another.
DECLARE
F_NO NUMBER := :FIRSTNUM(NON_ZERO)
S_NO NUMBER := :SECNUM(NON_ZERO)
BEGIN
RESULT := (F_NO/S_NO)+S_NO;
DBMS_OUTPUT.PUT_LINE(‘RESULT:’||RESULT);
END;*/
DECLARE
    first_number NUMBER := :first_num;
    second_number NUMBER := :second_num;
    result NUMBER;
BEGIN
    result := (first_number / second_number) + second_number;
    DBMS_OUTPUT.PUT_LINE('Result: ' || result);
EXCEPTION
    WHEN ZERO_DIVIDE THEN
        DBMS_OUTPUT.PUT_LINE('Error: Cannot divide by zero.');
END;

/*Practice 5:

Declare two SQL* plus variables named MAX_SALARY and MIN_SALARY that are of data type NUMBER.
Write a PL/SQL block that accepts deptno value from a user, selects the maximum salary and minimum salary paid in the department,
 from the EMP table and stores the corresponding values in MAX_SALARY and MIN_SALARY respectively. 
Use appropriate SQL * plus command to see the modified values of MAX_SALARY and MIN_SALARY



You declare SQL*Plus variables using the VARIABLE command:
VARIABLE variable_name data_type;
    :emp_salary := v_salary;  -- Assign the retrieved salary
Use the PRINT command to display the value of a variable:
SQLPlus variables are user-defined variables that you can declare and use within your SQLPlus sessions. They are not stored 
in the database itself but are local to your current SQL*Plus environment.


Variable MAX_SALARY NUMBER ;
Variable MIN_SALARY NUMBER;

DECLARE
V_DEPTNO dept.deptno%type := :deptno;
Begin
Select  max(sal) ,min(sal) into :max_sal,:min_sal from emp where deptno=v_deptno;
End;
Print max_sal;
Print min_sal;

ERROR HERE*/


VARIABLE max_salary NUMBER;
VARIABLE min_salary NUMBER;

DECLARE
    v_deptno NUMBER := :dept_num;
BEGIN
    SELECT MAX(sal), MIN(sal)
    INTO :max_salary, :min_salary
    FROM emp
    WHERE deptno = v_deptno;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No employees found in department ' || v_deptno);
END;
/

PRINT max_salary;
PRINT min_salary;

/*Practice 6: 

Write a PL/SQL block that accepts employee number from a user and retrieves the salary for the employee from the EMP table.
 It determines the salary class as per the following criteria and displays the salary and salary class on the screen
Criteria for deciding salary class: 
•	If the salary is less than 2500, then it comes under the class ‘LOW’
•	If the salary is greater than or equal to  2500 and less than 5000, then it comes under class ‘MEDIUM’.
•	If the salary is greater than or equal to 5000, then it comes under class ‘HIGH’




Key Differences from VARCHAR:
While VARCHAR also stores variable-length strings, Oracle recommends using VARCHAR2 because:
•	VARCHAR2 is the standard variable-length string type in Oracle.
•	VARCHAR's behavior might change in future Oracle versions (it's considered a legacy type).
•	VARCHAR2 handles NULL values more consistently.

DECLARE
V_empno emp.empno%type := :empno;
V_sal number;
V_class varchar2(25);
Begin
Select sal into v_sal from emp where empno=v_empno;
If v_sal<2500 then
V_class :=’low’;
Elseif v_sal>=2500 and v_sal<5000 then
V_class  :=’medium;
Else
V_class=’high’;
End if;
Dbms_output.put_line(‘salary:’||v_sal);
Dbms.output.put_line(‘salary class:’||v_class);
Exception
When no_data_found then 
dbms_output.put_line(‘employee not found’);
End;*/

DECLARE
    v_empno NUMBER := :employee_number;
    v_salary NUMBER;
    v_salary_class VARCHAR2(10);
BEGIN
    SELECT sal INTO v_salary
    FROM emp
    WHERE empno = v_empno;

    IF v_salary < 2500 THEN
        v_salary_class := 'LOW';
    ELSIF v_salary >= 2500 AND v_salary < 5000 THEN
        v_salary_class := 'MEDIUM';
    ELSE
        v_salary_class := 'HIGH';
    END IF;

    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
    DBMS_OUTPUT.PUT_LINE('Salary Class: ' || v_salary_class);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found.');
END;




/*
Practice 7:

Write a PL/SQL block that accepts an integer value between 1 and 12 from a user and displays the name of the corresponding month.
 If the number input  is not in the range +1 to +12 then the block should display the message “Invalid Month” on the screen





Declare
V_month_num number := :monthnum;
V_month_name varchar2(20);
Begin
If v_month_num between 1 and 12 then
Select to_char(to_date(v_month_num,’mm’),’month’) into v_month_name from dual;
Dbms_output.put_line(‘month naem’||v_month_name);
Else
Dbms_output.put_line(‘invalid month’);
converts a month number (stored in the variable v_month_num) into the corresponding month name (and stores it in v_month_name). Let's break down the keywords and functions:
•	TO_DATE(v_month_num, 'MM'): This function converts the number stored in v_month_num into a date value.
o	v_month_num: This is your variable containing the month number (e.g., 1 for January, 2 for February, etc.).
o	'MM': This is the format mask. It tells TO_DATE that the input string (v_month_num is implicitly converted to a string) represents a month number. The MM format mask specifies that the month is represented by a one or two-digit number.
•	TO_CHAR(..., 'MONTH'): This function converts a date value into a character string representing the month name.
o	...: The result of the TO_DATE function (a date value).
o	'MONTH': This is the format mask. It tells TO_CHAR to extract and format the month name from the date value. The MONTH format mask returns the full month name (e.g., 'JANUARY', 'FEBRUARY').
•	INTO v_month_name: This clause assigns the result of the TO_CHAR function (the month name) to the variable v_month_name.
•	FROM dual: dual is a special dummy table in Oracle. It's used here because SELECT statements require a FROM clause, even when not retrieving data from an actual table. dual is a convenient way to satisfy this requirement.
How it works together:
1.	TO_DATE: The month number in v_month_num is converted to a date. Since only the month is provided, Oracle uses the first day of the current year and sets the time to midnight as the default for the missing day and year components.
2.	TO_CHAR: The date value is then converted to a string containing the full month name using the 'MONTH' format mask.
3.	INTO: The resulting month name string is assigned to the variable v_month_name.
Example:
If v_month_num is 3, the code will execute as follows:
1.	TO_DATE(3, 'MM') returns a date representing March 1st of the current year (e.g., 01-MAR-2024).
2.	TO_CHAR(..., 'MONTH') converts this date to the string 'MARCH'.
3.	'MARCH' is stored in the variable v_month_name.
This technique is a common way to get the month name from a month number in Oracle PL/SQL. The dual table is used as a placeholder in the FROM clause because a table is required for the SELECT statement, even though we're not actually retrieving data from a real table.
*/
DECLARE
    v_month_num NUMBER := :month_number;
    v_month_name VARCHAR2(20);
BEGIN
    IF v_month_num BETWEEN 1 AND 12 THEN
        SELECT TO_CHAR(TO_DATE(v_month_num, 'MM'), 'MONTH') INTO v_month_name FROM dual;
        DBMS_OUTPUT.PUT_LINE('Month Name: ' || v_month_name);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Invalid Month');
    END IF;
END;

/*Practice 8: 

Write a PL/SQL block that accepts a positive integer number from a user and displays its factorial on the screen

The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. In other words:
n! = n × (n - 1) × (n - 2) × ... × 2 × 1

Declare 
Num number := :posituive num;
Factorial number := 1;
Begin
If n<0 then 
Dbms_output.put_line(‘not for -ve no’);
Elseif n=0 then 
Dbms_output.put_line(‘factorial of 0 is 1’);
Else
For I in 1..n loop
Factorial := factorial *I;
End loop;
Dbms_output.put_line(‘factorial of’||n||’is’||factorial);
End if;
End;*/
DECLARE
    n NUMBER := :num;
    factorial NUMBER := 1;
BEGIN
    IF n < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Factorial is not defined for negative numbers.');
    ELSIF n = 0 THEN
        DBMS_OUTPUT.PUT_LINE('Factorial of 0 is 1.');
    ELSE
        FOR i IN 1..n LOOP
            factorial := factorial * i;
        END LOOP;
        DBMS_OUTPUT.PUT_LINE('Factorial of ' || n || ' is ' || factorial);
    END IF;
END;
/*
Practice 9:

Write a PL/SQL block that accepts employee number from a user. Declare a PL/SQL record to store the employee number, employee name, 
department number and the department name of the employee. Retrieve the values of these columns for the employee from the EMP and DEPT
 tables and display the employee name and the corresponding department name on the screen.




Declare
V_empno emp.empno%type := :empno;
Type emp_rec is record(
Empno emp.empno%type,
Ename emp.ename%type,
Deptno emp.deptno%type,
Dname dept.dname%type
);
V_emp_rec emp_rec;
Begin
Select e.empno,e.ename,e.deptno,d.dname into v_emp_rec from emp e join dept d on e.deptno=d.deptno where e.empno=v_empno;
Dbms_output.put_line(‘employee name’||v_emp_rec.ename||’department name’||v_emp_rec.dname);
End;*/
DECLARE
    v_empno NUMBER := :employee_number;

    TYPE emp_rec_type IS RECORD (
        empno emp.empno%TYPE,
        ename emp.ename%TYPE,
        deptno emp.deptno%TYPE,
        dname dept.dname%TYPE
    );
    v_emp_rec emp_rec_type;

BEGIN
    SELECT e.empno, e.ename, e.deptno, d.dname
    INTO v_emp_rec
    FROM emp e JOIN dept d ON e.deptno = d.deptno
    WHERE e.empno = v_empno;

    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_emp_rec.ename);
    DBMS_OUTPUT.PUT_LINE('Department Name: ' || v_emp_rec.dname);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found.');
END;
/*
Practice 10:

Write a PL/SQL block to add a department row in the DEPT table with the following values for columns

a.	The block retrieves the maximum value of deptno from the dept table and adds 1 to it to generate the value of deptno 
b.	Dname  value should be  ‘Education’
c.	Loc value should be NULL



Declare 
V_max_deptno dept.deptno%type;
Begin
Select max(deptno) into v_max_deptno from dept;
Insert into dept(deptno,dname,loc) values(v_max_deptno+1,’education’,null);
DBMS_OUTPUT.PUT_LINE('Department added successfully.');

EXCEPTION
    WHEN OTHERS THEN  -- Catch any potential errors during insert
        DBMS_OUTPUT.PUT_LINE('Error adding department: ' || SQLERRM);
        ROLLBACK; -- Rollback the transaction if an error occurs
END;
Remember to enable DBMS_OUTPUT in your SQL*Plus environment to see the output from DBMS_OUTPUT.PUT_LINE. You can do this by running SET
 SERVEROUTPUT ON; before executing the PL/SQL blocks.
*/
DECLARE
    v_max_deptno dept.deptno%TYPE;
BEGIN
    SELECT MAX(deptno) INTO v_max_deptno FROM dept;

    INSERT INTO dept (deptno, dname, loc)
    VALUES (v_max_deptno + 1, 'Education', NULL);

    DBMS_OUTPUT.PUT_LINE('Department added successfully.');

EXCEPTION
    WHEN OTHERS THEN  -- Catch any potential errors during insert
        DBMS_OUTPUT.PUT_LINE('Error adding department: ' || SQLERRM);
        ROLLBACK; -- Rollback the transaction if an error occurs
END;

SELECT * from dept;