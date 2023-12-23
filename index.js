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
}
function addTableRow(firstName, lastName, rollNo) {
  const newRow = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = firstName;

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = lastName;

  const rollNoCell = document.createElement("td");
  rollNoCell.textContent = rollNo;

  const div = document.createElement("div");
  div.classList.add("actions");
  const editCell = document.createElement("button");
  editCell.textContent = "Edit";
  editCell.classList.add("editButton");
  div.appendChild(editCell);

  const deleteCell = document.createElement("button");
  deleteCell.textContent = "Delete";
  deleteCell.classList.add("deleteButton");
  div.appendChild(deleteCell);

  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  newRow.appendChild(rollNoCell);
  newRow.appendChild(div);

  const tableBody = document.getElementById("tableBody");
  tableBody.appendChild(newRow);
}

document.addEventListener("click", deleteStudent);

function deleteStudent(e) {
  if (e.target.classList.contains("deleteButton"))
    e.target.parentNode.parentNode.remove();
}
