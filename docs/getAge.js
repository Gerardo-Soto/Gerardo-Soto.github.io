/**
 * @param {string} dateString
 * @return {number} 
 */
function getAge(dateString) {
  let today = new Date();
  let birthday = new Date(dateString);
  let age = today.getFullYear() - birthday.getFullYear();
  let monthsDifference = today.getMonth() - birthday.getMonth();
  if (
    monthsDifference < 0 ||
    (monthsDifference === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  };
  return age;
};

function getMonths(dateString) {
  let today = new Date();
  let birthday = new Date(dateString);
  let months = today.getMonth() - birthday.getMonth();

  if (months < 0) {
    months = 12 - birthday.getMonth() + today.getMonth();
  };

  return months;

};


function getDays(dateString) {
  // Get the current date
  let currentDate = new Date();
  let birthday = new Date(dateString);

  let days = currentDate.getUTCDate() - birthday.getUTCDate();
  
  if (days < 0) {
    days = 30 - birthday.getUTCDate() + currentDate.getUTCDate();
  };

  // Output the result
  return days;
};


let tagProfileAge = document.getElementById('profileAge');
console.log(tagProfileAge.value);
const birthday = "1994/08/17 10:30:00";

const age = 'I am '+ getAge(birthday) + ' years old. <span class="question-mark" title="Exact age calculated with JS: '+getAge(birthday)+' years, '+getMonths(birthday)+' months, '+getDays(birthday)+' days"> <img class="question-mark" src="https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/profile%2Fquestion-mark.png?alt=media&token=19d42751-c48a-4b40-8585-db52fe6328f5" alt="question mark to get exact age" /> </span>';

tagProfileAge.innerHTML = age;



