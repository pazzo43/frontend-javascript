a TypeScript about defining a flexible interface for a Teacher object.

Here’s how to do it step-by-step
  Folder setup

1.In your project directory, run:
mkdir task_1

2.Copy the following config files into the new folder:

package.json

tsconfig.json

webpack.config.js

Your structure should look like this:
task_1/
├── package.json
├── tsconfig.json
├── webpack.config.js
└── main.ts

Code (main.ts)

Now open main.ts and add the following TypeScript code:
interface Teacher {
  readonly firstName: string;       // read-only property
  readonly lastName: string;        // read-only property
  fullTimeEmployee: boolean;        // required
  yearsOfExperience?: number;       // optional
  location: string;                 // required
  [key: string]: any;               // allows extra properties
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

Explanation

readonly → ensures firstName and lastName cannot be changed after initialization.

? → makes yearsOfExperience optional.

[key: string]: any → allows adding any other custom properties (like contract).

Example output

When you compile and run (npx webpack or tsc && node dist/main.js), it should print:
{
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false
}

