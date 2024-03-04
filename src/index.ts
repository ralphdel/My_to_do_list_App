console.log("working perfectly");
let myform: HTMLFormElement= document.getElementById("todo-form") as HTMLFormElement;
//console.log(myform);
let inputtedtTask: HTMLInputElement= document.getElementById("task") as HTMLInputElement;
//console.log(inputtedtTask);
let Submittask: HTMLButtonElement= document.getElementById("save_task") as HTMLButtonElement;
//console.log(Submittask);
let displayTask : HTMLOListElement= document.getElementById("displaytask") as HTMLOListElement;
//console.log(displayTask);


myform.addEventListener("submit", function(e:Event) {
  e.preventDefault()
  let inputtask=inputtedtTask.value;
  console.log(inputtask);


  if (inputtask==="") {
    alert("task cannot be empty")
  } 
  else {
    showtask(inputtask);
    inputtask=""
  }
})

function showtask(t:string):void {
  let tasklist=document.createElement("li");
  tasklist.innerText=t;
  
  

  let checkbox= document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  tasklist.appendChild(checkbox)

  let editbtn =document.createElement("button")
  editbtn.innerText="Edit"
  editbtn.setAttribute("id", "t")
  tasklist.appendChild(editbtn)

  let deletebtn=document.createElement("button")
  deletebtn.innerText="Delete"
  tasklist.appendChild(deletebtn)

 displayTask.appendChild(tasklist)


 inputtedtTask.value = "";
 //this sets my input field back to empty after display


 editbtn.addEventListener("click", function () {
  // Prompt the user for a new task
  const newTask = prompt("Enter the new task:");
  if (newTask !== null) {
    // Update the task text with the new one and add the other buttons 
    tasklist.innerText = newTask;
    tasklist.appendChild(checkbox);
    tasklist.appendChild(editbtn);
    tasklist.appendChild(deletebtn)
  }
});

deletebtn.addEventListener("click", function () {
  // Remove the tasklist when the delete button is clicked
  displayTask.removeChild(tasklist);
});


}