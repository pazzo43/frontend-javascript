TypeScript assignment about defining a flexible interface for a Teacher object.
  File: main.ts
/**
 * Represents a Teacher object.
 * - firstName and lastName are immutable.
 * - fullTimeEmployee and location are required.
 * - yearsOfExperience is optional.
 * - Any additional attributes (e.g., contract) are allowed.
 */

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown; // allows extra attributes while keeping type safety
}

// ✅ Example instances
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Paris',
  yearsOfExperience: 5,
  contract: true,
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// 🧾 Helper function to display teacher info
function printTeacherInfo(teacher: Teacher): void {
  console.log('--- Teacher Info ---');
  Object.entries(teacher).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  console.log('--------------------\n');
}

// 🧪 Test
printTeacherInfo(teacher1);
printTeacherInfo(teacher2);

Example output:
--- Teacher Info ---
firstName: Alice
lastName: Smith
fullTimeEmployee: true
location: Paris
yearsOfExperience: 5
contract: true
--------------------

--- Teacher Info ---
firstName: John
lastName: Doe
fullTimeEmployee: false
location: London
contract: false

complete TypeScript code for that task
// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional attributes
}

// Extend Teacher to create Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

Explanation

readonly ensures firstName and lastName can’t be modified after initialization.

Teacher includes all the base attributes.

Directors extends Teacher and adds numberOfReports.

The [key: string]: any line allows adding extra optional properties in the future.




  
