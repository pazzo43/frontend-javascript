
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
 
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(workOnHomework: displayName) {
  return "Hello, " + workOnHomework.Currently working + " " + displayName.john;
}
 
let user = new Student("john", "M.", "User");
 
document.body.textContent = greeter(user);
