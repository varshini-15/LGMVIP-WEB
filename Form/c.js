
var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["studentName"] = document.getElementById("studentName").value;
  formData["collegeName"] = document.getElementById("collegeName").value;
  formData["Branch"] = document.getElementById("Branch").value;
  formData["Mob"] = document.getElementById("Mob").value;
  formData["Ema"] = document.getElementById("Ema").value;
  formData["Addr"] = document.getElementById("Addr").value;
  formData["Course"] = document.getElementById("Course").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.studentName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.collegeName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Branch;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Mob;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Ema;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.Addr;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.Course;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("collegeName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Branch").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Mob").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Ema").value = selectedRow.cells[4].innerHTML;
  document.getElementById("Addr").value = selectedRow.cells[5].innerHTML;
  document.getElementById("Course").value = selectedRow.cells[6].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentName;
  selectedRow.cells[1].innerHTML = formData.collegeName;
  selectedRow.cells[2].innerHTML = formData.Branch;
  selectedRow.cells[3].innerHTML = formData.Mob;
  selectedRow.cells[4].innerHTML = formData.Ema;
  selectedRow.cells[5].innerHTML = formData.Addr;
  selectedRow.cells[6].innerHTML = formData.Course;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("collegeName").value = "";
  document.getElementById("Branch").value = "";
  document.getElementById("Mob").value = "";
  document.getElementById("Ema").value = "";
  document.getElementById("Addr").value = "";
  document.getElementById("Course").value = "";

  selectedRow = null;
}
