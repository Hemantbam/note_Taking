/** Function to show The Notes*/
function showTodo() {
  let noteData = document.getElementById("todoLists");
  noteData.innerHTML = "";
  for (i = 0; i < localStorage.length; i++) {
    // run a oop till the length of the data saved in local storage
    let key = localStorage.key(i);
    console.log(key);
    if (key.startsWith("note")) {
      // check if the key is started with the note letter to verify that we are bringing only the todo list saved datas
      let retriveNoteData = localStorage.getItem(key);
      let savedNotesData = JSON.parse(retriveNoteData); // parse the json string to the object
      const tableRow = document.createElement("tr");
      const tableNoteData = document.createElement("td");
      const tableDeleteNote = document.createElement("td");
      const tableDeleteIcon = document.createElement("img");

      tableNoteData.textContent = savedNotesData;
      tableDeleteIcon.src = "deleteIcon.png";
      tableDeleteIcon.alt = "Delete Note";
      tableDeleteIcon.style.cursor = "pointer";
      tableDeleteNote.onclick = function () {
        removeNote(key, tableRow);
      };
      tableDeleteNote.appendChild(tableDeleteIcon);
      tableRow.appendChild(tableNoteData);
      tableRow.appendChild(tableDeleteNote);

      noteData.appendChild(tableRow);
    }
  }
}

/**Function to add Notes */
function addFunction() {
  let text = document.getElementById("inputText").value;
  if (text.trim() != "") {
    // check if the input area is empty or with blank spaces
    const save = JSON.stringify(text);
    noteID = "note" + new Date().getTime();
    localStorage.setItem(noteID, `${save}`); // save the task with the task id as a key whereas input text as a value in local storage
    alert("Task added");
    appendData(text, noteID);
  } else {
    alert("!! We dont accept the blank spaces as your Notes !!");
  }
  document.getElementById("inputText").value = "";
}

/**Function to append the Note data */
function appendData(text, noteID) {
  let noteData = document.getElementById("todoLists"); // Correct the reference to the to-do list
  const tableRow = document.createElement("tr");
  const tableNoteData = document.createElement("td");
  const tableDeleteNote = document.createElement("td");
  const tableDeleteIcon = document.createElement("img");

  tableNoteData.textContent = text;
  tableDeleteIcon.src = "deleteIcon.png";
  tableDeleteIcon.alt = "Delete Note";
  tableDeleteIcon.style.cursor = "pointer";
  tableDeleteNote.onclick = function () {
    removeNote(noteID, tableRow);
  };
  tableDeleteNote.appendChild(tableDeleteIcon);
  tableRow.appendChild(tableNoteData);
  tableRow.appendChild(tableDeleteNote);
  noteData.appendChild(tableRow);
}

/**Function to remove note */
function removeNote(noteId, row) {
  localStorage.removeItem(noteId);
  row.remove();
}
window.onload = showTodo;
