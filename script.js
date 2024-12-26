let todoele = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

document.querySelector("button").onclick = function () {
    if (todoele.value.length == 0) {
        alert("Enter a task details");
    } else {
        // Add new task to the list
        tasklist.innerHTML = tasklist.innerHTML + 
            `<div class="task">
                <span id="work">${todoele.value}</span>
                <button class="del"><i class="fa fa-trash"></i></button>
            </div>`;

        // Attach delete functionality
        let alltasks = document.querySelectorAll('.del');
        for (let i = 0; i < alltasks.length; i++) {
            alltasks[i].onclick = function () {
                this.parentNode.remove(); // Remove the task div
            };
        }

        // Clear the input field
        todoele.value = "";
    }
};
