function showTodo() { // function for showing all the todo lists
  let todoData = document.getElementById("todoLists");
  for (i = 0; i < localStorage.length; i++) { // run a oop till the length of the data saved in local storage
    let key = localStorage.key(i); // store every keys in the key variable 
    console.log(key)
    if (key.startsWith("todo")) { // check if the key is started with the todo letter to verify that we are bringing only the todo list saved datas
      let x = localStorage.getItem(key); // get the items that meets the above condition and store it 
      let y = JSON.parse(x); // parse the json string to the object 
      const data = document.createElement("li"); // create an element to show the datas
      data.textContent = y; // use textcontent to fill the saved data to the element
      todoData.appendChild(data);
    }
  }
}

function addFunction() { // function for adding the todo list
  let text = document.getElementById("inputText").value;
  if(text.trim()!=""){ // check if the input area is emply or with blank spaces
  const save = JSON.stringify(text); // save the data in the form of string using pre build json stringfy function
  taskID = "todo" + new Date().getTime(); // add a todo string to a unique id for the key 
  localStorage.setItem(taskID, `${save}`); // save the task with the task id as a key whereas input text as a value in local storage
  alert("Task added"); // alert message
    appendData(text)
} else{
  alert("!! We dont accept the blank spaces as a todo task !!") // alert message 
}
  document.getElementById("inputText").value = "";
}


function appendData(text){
  let todoData = document.getElementById("todoLists"); // Correct the reference to the to-do list
  const recentData = document.createElement("li");
  recentData.textContent = text; // Use the provided text directly
  todoData.appendChild(recentData); // Append the newly created item to the list
}
window.onload = showTodo;