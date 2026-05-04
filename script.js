//Get Dom element
function calculateAge() {
 const birthDateValue = document.getElementById("birthdate").value;
const birthDate = new Date(birthDateValue);
const todayDate = new Date();
let age =todayDate.getFullYear() - birthDate.getFullYear(); 
const monthDifference = todayDate.getMonth() - birthDate.getMonth();
   let displayResult = document.getElementById("result");
   result.textContent = age;
   return;
};

