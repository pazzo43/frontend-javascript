this is a classic TypeScript ambient declaration exercise (using .d.ts for typing a plain JS library).

Let’s build it step-by-step correctly so that it compiles cleanly with npm run build and runs perfectly.

Folder structure

Your directory should look like this:
task_3/
│
├── package.json
├── tsconfig.json
├── webpack.config.js
│
└── js/
    ├── crud.js
    ├── crud.d.ts
    ├── interface.ts
    └── main.ts
1. interface.ts

Create this file at task_3/js/interface.ts
// task_3/js/interface.ts

// Define the type RowID
export type RowID = number;

// Define the interface RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

2. crud.js

Create this file at task_3/js/crud.js (this is plain JS provided in the project)
// task_3/js/crud.js

export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}

3. crud.d.ts

Create this ambient type declaration file in the same folder:
// task_3/js/crud.d.ts

import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

This tells TypeScript how to type-check the plain JS file crud.js.

  4. main.ts

Create this file at task_3/js/main.ts
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the new ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated version of the row
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

5. Expected console output

When you run:
npm run start-dev

You should see something like:
Insert row { firstName: 'Guillaume', lastName: 'Salva' }
Update row 125 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }
Delete row id 125

6. Build check

Run:
npm run build

No TypeScript errors should appear.
IntelliSense (auto-complete) should work for all CRUD functions.
