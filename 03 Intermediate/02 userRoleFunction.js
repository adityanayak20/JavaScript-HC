/*
Define a function that van answr the role of a user.methodsA user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user -  consume all content
other - trialuser.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; //this is not necessary
    case "subadmin":
      return `${name} is subadmin  with access to create/delete courses`;
    case "testprep":
      return `${name} is a test prep with access to create/delete tests`;
    case "user":
      return `${name} is a user to consume content`;

    default:
      return `${name} is a trial user`;   
  }
}

console.log(getUserRole("Aditya", "testprep"));

var getRole = getUserRole("Vegeta", "user");

console.log(getRole);
