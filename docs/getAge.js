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

let tagProfileAge = document.getElementById('profileAge');
console.log(tagProfileAge.value);
const birthday = "1994/08/17 10:30:00";

const age = 'I am '+ getAge(birthday) + ' years old.';

tagProfileAge.innerHTML = age;



