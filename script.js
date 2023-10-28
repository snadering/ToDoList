//select elements
const taskInput = document.querySelector(".task-input");
const taskAdd = document.querySelector(".task-add");
const taskList = document.querySelector(".task-list");


//add event to add button
taskAdd.addEventListener("click", (e) => {
    if(taskInput.value.length > 0){

        //prevent submit the form
        e.preventDefault();
        
        //create elements
        const item = document.createElement("li");
        const task = document.createElement("div");
        const checkButton = document.createElement("i");
        const taskName = document.createElement("span");
        const closeButton = document.createElement("i");

        //add class and value
        item.classList.add("item");
        task.classList.add("task");
        checkButton.classList.add("fa-solid", "fa-circle");
        taskName.classList.add("task-name");
        taskName.innerText = taskInput.value;
        closeButton.classList.add("fa-solid", "fa-xmark");

        //append elements
        taskList.appendChild(item);
        item.appendChild(task);
        task.appendChild(checkButton);
        task.appendChild(taskName);
        item.appendChild(closeButton);
        
        //add event to close button
        closeButton.addEventListener("click", () => {
            taskList.removeChild(item);
        });

        //add event to check button
        checkButton.addEventListener("click", (e) => {

            //Check if an element contains a class
            if(checkButton.classList.contains("fa-circle")){
                checkButton.classList.remove("fa-circle");
                checkButton.classList.add("fa-circle-check");
                taskName.style.textDecoration = "line-through"
                item.style.background = "#A3EBB1";
            } else {
                checkButton.classList.remove("fa-circle-check");
                checkButton.classList.add("fa-circle");
                taskName.style.textDecoration = "";
                item.style.background = "#D4F1F4";
            }
        });

        //clear input after add
        taskInput.value = "";
        taskInput.focus();

        } else {

            //prevent submit the form
            e.preventDefault();

        }
});