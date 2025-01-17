let form = document.querySelector("form");
let submitButton = document.querySelector("#btn");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let age = document.querySelector("#age");
let gender = document.querySelector("#gender");
let address = document.querySelector("#address");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
let dob = document.querySelector("#dob");
let occupation = document.querySelector("#occupation");

let tablebody = document.querySelector("#tablebody");

const getvalues = (e) => {
  e.preventDefault();

  let selectedGender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  let selectedOccupation = occupation.value;
  let selectedCountry = document.querySelector("#country").value;

  if (!checkvalidation()) {
    return;
  }

  let tr = document.createElement("tr");

  tr.innerHTML = `
     <td>${firstName.value} ${lastName.value}</td>
                <td>${email.value}</td>
                <td> ${tel.value}</td>
                <td>${age.value}</td>
                <td> ${selectedGender}</td>
                <td>${address.value}</td>
                <td>${city.value}</td>
                <td>${selectedCountry}</td>
                <td>${dob.value}</td>
                <td>${selectedOccupation}</td>
                <td class='deletebutton'><button>X</button></td>
    `;
  tablebody.appendChild(tr);
  form.reset();

  let deleteButton = tr.querySelector(".deletebutton button");

  deleteButton.addEventListener("click", () => {
    tr.remove();
  });
};

function checkvalidation() {
  if (!firstName.value.trim()) {
    alert("please enter the fisrt name");
    return false;
  }
  if (!lastName.value.trim()) {
    alert("please enter the last name");
    return false;
  }

  if (!email.value.trim()) {
    alert("please enter the email");

    return false;
  }

  if (!tel.value.trim()) {
    alert("please enter the tel");

    return false;
  }

  if (!age.value.trim()) {
    alert("please enter the age");

    return false;
  }
  if (!address.value.trim()) {
    alert("please enter the address");

    return false;
  }

  if (!city.value.trim()) {
    alert("please enter the city");

    return false;
  }

  if (!dob.value.trim()) {
    alert("please enter the dob");

    return false;
  }

  return true;
}

submitButton.addEventListener("click", getvalues);
