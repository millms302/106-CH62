const API= "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";


//this is a change made in app.js file
function readContent(){
let title = $("#txtTitle").val();
let desc = $("#txtDescription").val();
let color = $("#selColor").val();
let date = $("#selStatus").val();
let status = $("#selStatus").val();
let budget = $("#numBudget").val();
console.log(title, desc, color, date, status, budget)

let taskToSave = new Task(title, desc,color, date, status, budget);
console.log(taskToSave);
saveTask(taskToSave);
loadTask();
//displayTask(taskToSave);

}


function saveTask(task){
    $.ajax ({
        type: "POST",
        url: API,
        data: JSON.stringify(task), // JSON is like a translator, 'english' of 
        contentType:"application/json",
        success: function (created){
            console.log("created",created);
        },
        error: function(error){
            console.error("Post Server", error)
            alert("Task Could Not Be Saved");
        }
        // instead of sending the task from the form, I want to get it from the server.
    });
}

function loadTask(){
    $.ajax({
        type: "get",
        url: API,
        dataType: "json",
        success:function(list){
            $(".pending-task").empty();
            for(let i = 0;i < list.length;i++)
            {
                if(list[i].name === "mike"){
                    displayTask(list[i])
                }
            }
            //list.forEach(displayTask);
        },
        error: function(err)
        {
            console.log("Get error", err);
        }
    });
};

function displayTask(task){
    // Use template literals to create the layout
    let html = `
        <div class="task">
            <h3>${task.title}</h3>
            <div class="task-body">
                <div>${task.description}</div>
                <div>${task.date}</div>
                <div>${task.status}</div>
                <div>$${task.budget}</div>
            </div>
        </div>
    `;
    $(".pending-task").append(html);
}
function testConnection(){
    $.ajax({
        type: "GET",
        url: API,
        success: function(res){
            console.log("Server says: Hello", res);
        },
        error: function(error){
            console.log("Error", error);
        }
    });
}

function init(){
    console.log("App Initialized");
    $("#btnSave").click(readContent);
    loadTask();
}


window.onload = init;
// Mini Challenge
//Just read only those messages created by me.


function deleteAll() {
    $("#btnDelete").click(deleteAll);
    deleteAll();
}