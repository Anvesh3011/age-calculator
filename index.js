const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("dob");
const resultEl = document.getElementById("result");
function getAge(dobValue) {
  const currentDate = new Date();
  const dobDate = new Date(dobValue);
  let age = currentDate.getFullYear() - dobDate.getFullYear();
  const month = currentDate.getMonth() - dobDate.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < dobDate.getDate())) {
    age--;
  }

  return age;
}
btnEl.addEventListener("click", () => {
  const dobValue = dobEl.value;
  console.log(dobValue);
  if (dobValue === "") {
    alert("Please enter your date of birth");
  } else {
    const age = getAge(dobValue);
    resultEl.innerHTML = `Your age is ${age}`;
  }
});
