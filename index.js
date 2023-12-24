const status = document.querySelector("#text");

document.getElementById("buttonSubmit").addEventListener("click", (e) => {
  addStudent(e);
});

function addStudent(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const rollNo = document.getElementById("rollNo");

  console.log("Firstname:", firstName);
  console.log("Lastname:", lastName);
  console.log("Rollno:", rollNo);
  addTableRow(firstName.value, lastName.value, rollNo.value);
  firstName.value = "";
  lastName.value = "";
  rollNo.value = "";
  status.innerText = "Student added";
}
function addTableRow(firstName, lastName, rollNo) {
  const newRow = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.classList.add("firstNameCell");
  firstNameCell.textContent = firstName;

  const lastNameCell = document.createElement("td");
  lastNameCell.classList.add("lastNameCell");
  lastNameCell.textContent = lastName;

  const rollNoCell = document.createElement("td");
  rollNoCell.classList.add("rollNoCell");
  rollNoCell.textContent = rollNo;

  const div = document.createElement("div");
  div.classList.add("actions");
  const editCell = document.createElement("button");
  editCell.textContent = "Edit";
  editCell.classList.add("editButton");
  editCell.addEventListener("click", (e) => {
    editStudent(e);
  });
  div.appendChild(editCell);


  const deleteCell = document.createElement("button");
  deleteCell.textContent = "Delete";
  deleteCell.addEventListener("click", (e) => {
    deleteStudent(e);
  });
  deleteCell.classList.add("deleteButton");
  div.appendChild(deleteCell);

  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  newRow.appendChild(rollNoCell);
  newRow.appendChild(div);

  const tableBody = document.getElementById("tableBody");
  tableBody.appendChild(newRow);
}
function editStudent(e) {
  if (e.target.classList.contains("editButton")) {
    const currentEditButton = e.target;
    const currentParentRow = currentEditButton.parentNode.parentNode;
    console.log(currentParentRow);

    const newFirstName = window.prompt("Enter new value for first name:");
    currentParentRow.querySelector(".firstNameCell").innerText = newFirstName;

    const newlastName = window.prompt("Enter new value for last name:");
    currentParentRow.querySelector(".lastNameCell").innerText = newlastName;

    const newRollNo = window.prompt("Enter new value for roll number:");
    currentParentRow.querySelector(".rollNoCell").innerText = newRollNo;
    status.innerText = "Student edited";
  }
}


function deleteStudent(e) {
  if (e.target.classList.contains("deleteButton"))
    e.target.parentNode.parentNode.remove();
  status.innerText = "Student deleted";
}
