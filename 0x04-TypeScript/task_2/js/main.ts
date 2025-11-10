// --- INTERFACES ---

/**
 * Interface defining the required methods for a Director.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface defining the required methods for a Teacher.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// --- CLASSES ---

/**
 * Class implementing the DirectorInterface.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

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

// --- FACTORY FUNCTION ---

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

// --- NEW SUBJECTS AND TEACHING FUNCTION ---

/**
 * String literal type allowing only 'Math' or 'History'.
 */
type Subjects = 'Math' | 'History';

/**
 * Returns a string indicating which class the teacher is currently teaching.
 * @param todayClass The subject being taught ('Math' or 'History').
 * @returns A string like "Teaching Math".
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  // Since Subjects is a strict literal type, any other value must be 'History'.
  return 'Teaching History';
}

// --- EXPECTED RESULTS AND TESTING ---

console.log('--- Testing createEmployee function ---');

const employee1 = createEmployee(200);
console.log(`Salary 200: Employee is ${employee1.constructor.name}`); // Expected: Teacher

const employee2 = createEmployee(1000);
console.log(`Salary 1000: Employee is ${employee2.constructor.name}`); // Expected: Director

const employee3 = createEmployee('$500');
console.log(`Salary $500: Employee is ${employee3.constructor.name}`); // Expected: Director

console.log('\n--- Testing teachClass function ---');

console.log(`teachClass('Math'): ${teachClass('Math')}`);     // Expected: Teaching Math
console.log(`teachClass('History'): ${teachClass('History')}`); // Expected: Teaching History


