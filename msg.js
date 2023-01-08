
const studentsContainer = document.querySelector(".students");
const students = JSON.parse(localStorage.getItem("students")) || [];


const createStudentElement = ({ name, age, roll }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student roll: " + roll;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);