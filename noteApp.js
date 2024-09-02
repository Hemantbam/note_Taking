/** Function to show The Notes*/
function showTodo() {
  let noteData = document.getElementById("todoLists");
  for (i = 0; i < localStorage.length; i++) {
    // run a oop till the length of the data saved in local storage
    let key = localStorage.key(i); 
    console.log(key);
    if (key.startsWith("note")) { // check if the key is started with the note letter to verify that we are bringing only the todo list saved datas
      let retriveNoteData = localStorage.getItem(key); 
      let savedNotesData = JSON.parse(retriveNoteData); // parse the json string to the object
      const data = document.createElement("li"); 
      data.textContent = savedNotesData; // use textcontent to fill the saved data to the element
      noteData.appendChild(data);
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
    appendData(text);
  } else {
    alert("!! We dont accept the blank spaces as your Notes !!");
  }
  document.getElementById("inputText").value = "";
}

/**Function to append the Note datas */
function appendData(text) {
  let noteData = document.getElementById("todoLists"); // Correct the reference to the to-do list
  const recentInputData = document.createElement("li");
  recentInputData.textContent = text; // Use the provided text directly
  noteData.appendChild(recentInputData); // Append the newly created item to the list
}
window.onload = showTodo;
