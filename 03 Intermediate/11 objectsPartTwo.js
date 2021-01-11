var user = {
  firstName : "Aditya",
  lastName : "Nayak",
  role : "Admin",
  loginCount : 32,
  facebookSignedIn : true,
  courselist : [],
  buyCourse : function (courseName) {
    this.courselist.push(courseName);
  },
  getCourseCount : function () {
    return `${this.firstName} is enrolled in total of ${this.courselist.length} courses`;
  },
};


console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());