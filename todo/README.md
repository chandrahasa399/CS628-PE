Input:
ToDoList Component: An array of task strings, where each string represents a to-do item.
onDelete: A function that handles the deletion of a task. It is passed to each ToDoTask component to allow task removal.
ToDoTask Component: A string representing a single task.
onDelete: A function to delete the current task passed from the ToDoList component.
Process:
ToDoList Component:
Iterates over the tasks array using the .map() method.For each task, it renders a ToDoTask component with the task string passed as a task prop and a delete handler (onDelete) that is called with the index of the task to be deleted.
ToDoTask Component:
Displays the task text (task prop) in a <li> element. Renders a "Delete" button styled with a red background. The onDelete function is called when the button is clicked.
Output:
ToDoList Component:
A <ul> element containing a list of <li> elements, each representing a task.
Each <li> includes the task name and a "Delete" button. Clicking the button triggers the deletion of the task via the onDelete function passed to the ToDoTask.
ToDoTask Component:
A <li> element that displays the task name and includes a "Delete" button.
When clicked, the button calls the onDelete function, which removes the corresponding task.