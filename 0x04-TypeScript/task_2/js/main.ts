Looking at the tasks, I need to create functions that work with employee types and use type predicates. Based on the expected results, I can infer the structure of the employee types and related functions. Let me create the solution:
// Define the employee interfaces and types
interface Teacher {
  type: 'teacher';
  workTeacherTasks(): void;
}

interface Director {
  type: 'director';
  workDirectorTasks(): void;
}

type Employee = Teacher | Director;

// Factory function to create employees (inferred from expected usage)
function createEmployee(salary: number): Employee {
  if (salary < 500) {
    return {
      type: 'teacher',
      workTeacherTasks: () => console.log('Getting to work')
    } as Teacher;
  } else {
    return {
      type: 'director',
      workDirectorTasks: () => console.log('Getting to director tasks')
    } as Director;
  }
}

// Type predicate function to check if employee is a Director
function isDirector(employee: Employee): employee is Director {
  return employee.type === 'director';
}

// Function to execute work based on employee type
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

// Test the functions (as shown in expected results)
executeWork(createEmployee(200));    // Output: Getting to work
executeWork(createEmployee(1000));   // Output: Getting to director tasks

Explanation:

Interfaces and Types:

Teacher interface with type: 'teacher' and workTeacherTasks method

Director interface with type: 'director' and workDirectorTasks method

Employee type as a union of Teacher | Director

isDirector function:

Uses a type predicate employee is Director to narrow the type

Checks the type property to determine if the employee is a Director

executeWork function:

Uses isDirector type guard to check the employee type

Calls the appropriate method based on the employee type

TypeScript knows the correct type within each branch due to the type predicate

createEmployee function:

Factory function that creates employees based on salary

Salary < 500 creates a Teacher, otherwise creates a Director

This matches the expected behavior shown in the test cases

The type predicate isDirector allows TypeScript to properly narrow the type within conditional blocks, ensuring type safety when calling the specific methods for each employee type.



