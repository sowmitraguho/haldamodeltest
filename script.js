// let validRollNumbersList = [];
// let submittedRollNumbersList = [];
// let aExamLink = "";
// let bExamLink = "";
// let cExamLink = "";
// let dExamLink = "";
// let allExamLinks = [];


// fetch('https://sowmmo.pythonanywhere.com/get-data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     validRollNumbersList = data.validRollNumbers;
//     submittedRollNumbersList = [...new Set(data.submittedRollNumbers)];
    
//     //submittedRollNumbersList = data.submittedRollNumbers;
//     allExamLinks = [data.aExamLinks1[0], data.bExamLinks1[0], data.cExamLinks1[0], data.dExamLinks1[0], data.aExamLinks2[0], data.bExamLinks2[0], data.cExamLinks2[0], data.dExamLinks2[0]];
//     console.log(validRollNumbersList, submittedRollNumbersList, allExamLinks);
//   })
//   .catch(err => console.error('Error fetching data:', err));


// const TIME_LIMIT = 30 * 60;
// let timerInterval;

// document.getElementById("rollNumber").value = ""; // Clear the input field
// document.getElementById("rollForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent form submission

//   // Get the entered roll number
//   const rollNumber = document.getElementById("rollNumber").value;

//   // Check if the roll number is valid
//   if (validRollNumbersList.includes(rollNumber)) {
//     // Check if the roll number has already submitted
//     if ((submittedRollNumbersList.includes('A' + rollNumber) || rollNumber[1] == '0') &&
//       (submittedRollNumbersList.includes('B' + rollNumber) || rollNumber[2] == '0') &&
//       (submittedRollNumbersList.includes('C' + rollNumber) || rollNumber[3] == '0') &&
//       (submittedRollNumbersList.includes('D' + rollNumber) || rollNumber[4] == '0')) {
//       alert("This roll number has already submitted the form. You cannot submit it again.");
//       //return;
//     } else {

//       document.getElementById("rollForm").classList.add("hidden");
//       if (rollNumber[0] == '1') {
//         document.getElementById("examlists-1").classList.remove("hidden");
//         if (rollNumber[1] == '1' && !submittedRollNumbersList.includes('A' + rollNumber)) document.getElementById("a-unit-exam").classList.remove("hidden");
//         if (rollNumber[2] == '1' && !submittedRollNumbersList.includes('B' + rollNumber)) document.getElementById("b-unit-exam").classList.remove("hidden");
//         if (rollNumber[3] == '1' && !submittedRollNumbersList.includes('C' + rollNumber)) document.getElementById("c-unit-exam").classList.remove("hidden");
//         if (rollNumber[4] == '1' && !submittedRollNumbersList.includes('D' + rollNumber)) document.getElementById("d-unit-exam").classList.remove("hidden");
//         aExamLink = allExamLinks[0];
//         bExamLink = allExamLinks[1];
//         cExamLink = allExamLinks[2];
//         dExamLink = allExamLinks[3];
//         console.log(submittedRollNumbersList);
//       } else if(rollNumber[0] == '2') {
//         document.getElementById("examlists-2").classList.remove("hidden");
//         if (rollNumber[1] == '1' && !submittedRollNumbersList.includes('A' + rollNumber)) document.getElementById("a-unit-exam").classList.remove("hidden");
//         if (rollNumber[2] == '1' && !submittedRollNumbersList.includes('B' + rollNumber)) document.getElementById("b-unit-exam").classList.remove("hidden");
//         if (rollNumber[3] == '1' && !submittedRollNumbersList.includes('C' + rollNumber)) document.getElementById("c-unit-exam").classList.remove("hidden");
//         if (rollNumber[4] == '1' && !submittedRollNumbersList.includes('D' + rollNumber)) document.getElementById("d-unit-exam").classList.remove("hidden");
//         aExamLink = allExamLinks[4];
//         bExamLink = allExamLinks[5];
//         cExamLink = allExamLinks[6];
//         dExamLink = allExamLinks[7];
//       };

//       document.getElementById("a-unit-exam-button").addEventListener("click", () => {
//         document.getElementById("a-unit-exam").classList.add("hidden");
//         if (!submittedRollNumbersList.includes('A' + rollNumber)) {
//         submittedRollNumbersList.push('A' + rollNumber);
//         submitRoll(submittedRollNumbersList);
//         startExam(aExamLink);
//       }});
//       document.getElementById("b-unit-exam-button").addEventListener("click", () => {
//         document.getElementById("b-unit-exam").classList.add("hidden");
//         if (!submittedRollNumbersList.includes('B' + rollNumber)) {
//         submittedRollNumbersList.push('B' + rollNumber);
//         submitRoll(submittedRollNumbersList);
//         startExam(bExamLink);
//       }});
//       document.getElementById("c-unit-exam-button").addEventListener("click", () => {
//         document.getElementById("c-unit-exam").classList.add("hidden");
//         if (!submittedRollNumbersList.includes('C' + rollNumber)) {
//         submittedRollNumbersList.push('C' + rollNumber);
//         submitRoll(submittedRollNumbersList);
//         startExam(cExamLink);
//       }});
//       document.getElementById("d-unit-exam-button").addEventListener("click", () => {
//         document.getElementById("d-unit-exam").classList.add("hidden");
//         if (!submittedRollNumbersList.includes('D' + rollNumber)) {
//         submittedRollNumbersList.push('D' + rollNumber);
//         submitRoll(submittedRollNumbersList);
//         startExam(dExamLink);
//       }});


//       console.log(rollNumber, submittedRollNumbersList);
//     }

//     document.getElementById("close").addEventListener("click", () => {
//       document.getElementById("rollForm").classList.remove("hidden");
//       document.getElementById("examlists-1").classList.add("hidden");
      
//       document.getElementById("examlists-2").classList.add("hidden");
      
//       document.getElementById("formContainer").classList.add("hidden");

//       console.log(submittedRollNumbersList);
//     });

//   } else {
//     // Show an error message for invalid roll numbers
//     alert("Invalid roll number. Please try again.");
//   }
// });




// async function submitRoll(submittedRollNumbersList) {
  

//   await fetch('https://sowmmo.pythonanywhere.com/update-data', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       submittedRollNumbers: submittedRollNumbersList
//     }),
//   })
//     .then(response => response.json())
//     .then(data => console.log(data.message))
//     .catch(err => console.error('Error sending data:', err));
// }


// function startExam(examLink) {

//   const googleFormURL = examLink;
//   document.getElementById("googleForm").src = googleFormURL;







//   // Show the form container

//   document.getElementById("formContainer").classList.add("block");
//   document.getElementById("formContainer").classList.remove("hidden");
//   console.log(submittedRollNumbersList);

//   // Start the timer
//   startTimer(TIME_LIMIT);
// };


// function startTimer(duration) {
//   const timerElement = document.getElementById("timer");
//   let timeRemaining = duration;

//   timerInterval = setInterval(() => {
//     const minutes = Math.floor(timeRemaining / 60);
//     const seconds = timeRemaining % 60;

//     timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//     timeRemaining--;

//     if (timeRemaining < 0) {
//       clearInterval(timerInterval);
//       timerElement.textContent = "Time is up!";
//       document.getElementById("formContainer").classList.add("hidden");
//       document.getElementById("rollForm").classList.remove("hidden");
//       alert("Time is up! You can no longer submit the form.");
//       window.location.href = "#rollForm"
//       document.getElementById("rollNumber").value = ""; // Clear the input field
//     }
//   }, 1000);
// }









// Fake JSON data file for exams
const fakeExamsData = {
  "batch1": [
      { "examName": "Math Final", "syllabus": "Chapters 1-10", "date": "2025-01-15", "time": "10:00 AM" },
      { "examName": "Physics Midterm", "syllabus": "Chapters 1-5", "date": "2025-02-10", "time": "2:00 PM" }
  ],
  "batch2": [
      { "examName": "Biology Final", "syllabus": "Chapters 1-12", "date": "2025-01-20", "time": "11:00 AM" },
      { "examName": "Chemistry Midterm", "syllabus": "Chapters 1-6", "date": "2025-02-12", "time": "3:00 PM" }
  ]
};

const loginForm = document.getElementById("login-form");
const studentIdInput = document.getElementById("student-id");
const loginSection = document.getElementById("login-section");
const examListSection = document.getElementById("exam-list-section");
const examList = document.getElementById("exam-list");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const studentId = studentIdInput.value.trim();

  // Check if the student ID is valid
  if (/^1\d{7}$/.test(studentId)) {
      displayExams("batch1");
  } else if (/^2\d{7}$/.test(studentId)) {
      displayExams("batch2");
  } else {
      alert("Invalid Student ID. Please enter a valid 8-digit ID.");
  }
});

function displayExams(batch) {
  loginSection.classList.add("hidden");
  examListSection.classList.remove("hidden");

  const exams = fakeExamsData[batch];
  examList.innerHTML = exams.map(exam => `
      <div class="mb-4 border-b pb-2">
          <h2 class="text-lg font-semibold text-gray-700">${exam.examName}</h2>
          <p class="text-gray-600">Syllabus: ${exam.syllabus}</p>
          <p class="text-gray-600">Date: ${exam.date}</p>
          <p class="text-gray-600">Time: ${exam.time}</p>
      </div>
  `).join("");
}