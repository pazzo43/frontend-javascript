Here is the complete TypeScript code that implements the requested interfaces, classes, and the factory function, following professional development standards.
  TypeScript Implementation
// 1. DirectorInterface Interface
/**
 * Interface defining the required methods for a Director.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. TeacherInterface Interface
/**
 * Interface defining the required methods for a Teacher.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ---

// 3. Director Class
/**
 * Class implementing the DirectorInterface.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    // Note: The prompt used 'getToWork' but the interface method is 'getCoffeeBreak'.
    // Implementing 'getCoffeeBreak' as requested:
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// 4. Teacher Class
/**
 * Class implementing the TeacherInterface.
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// ---

// 5. createEmployee Function
/**
 * Factory function to create either a Director or a Teacher based on salary.
 * @param salary The employee's salary (number or string).
 * @returns An instance of Director or Teacher.
 */
function createEmployee(salary: number | string): Director | Teacher {
  // Convert string salary to number if necessary for comparison
  const numericSalary = typeof salary === 'string' ? parseFloat(salary.replace(/[^\d.]/g, '')) : salary;

  // Check the condition: if salary is a number AND less than 500, return Teacher.
  if (typeof numericSalary === 'number' && numericSalary < 500) {
    return new Teacher();
  }
  
  // Otherwise, return a Director.
  return new Director();
}

// ---

// 6. Expected Results (Testing the createEmployee function)
console.log('--- Testing createEmployee function ---');

// Test Case 1: Salary is a number, less than 500
const employee1 = createEmployee(200);
console.log(`Salary 200: Employee is ${employee1.constructor.name}`); // Output: Teacher

// Test Case 2: Salary is a number, 500 or more
const employee2 = createEmployee(1000);
console.log(`Salary 1000: Employee is ${employee2.constructor.name}`); // Output: Director

// Test Case 3: Salary is a string
const employee3 = createEmployee('$500');
console.log(`Salary $500: Employee is ${employee3.constructor.name}`); // Output: Director

// ---

// 7. Testing methods (Example usage of the created instances)
console.log('\n--- Testing class methods ---');
console.log('Director Tasks:', (employee2 as Director).workDirectorTasks()); // Getting to director tasks
console.log('Teacher Tasks:', (employee1 as Teacher).workTeacherTasks()); // Getting to work


