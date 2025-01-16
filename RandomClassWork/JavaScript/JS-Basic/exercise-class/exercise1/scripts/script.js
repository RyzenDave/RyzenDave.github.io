/*
Make a todo app, you should have only one input and add button,after 
clicking on the add button,
display the newly added task in an underdered list each new todo.
Add the todos to an array.
*/
$(document).ready(function () {
  var tasks = [];

  $("#addTaskButton").click(function () {
    var taskName = $("#taskInput").val();
    if (taskName) {
      var task = {
        name: taskName,
        isCompleted: false,
      };
      tasks.push(task);
      addTaskToList(task);
      $("#taskInput").val("");
    }
  });

  function addTaskToList(task) {
    var taskItem = $("<li></li>").text(task.name);
    var checkbox = $("<input type='checkbox'>").click(function () {
      task.isCompleted = !task.isCompleted;
      taskItem.css(
        "text-decoration",
        task.isCompleted ? "line-through" : "none"
      );
    });
    taskItem.prepend(checkbox);
    $("#taskList").append(taskItem);
  }
});
