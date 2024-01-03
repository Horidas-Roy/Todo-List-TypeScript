"use strict";
const list = document.getElementById("list");
const newTaskTitle = document.getElementById("new-task-title");
const submit = document.getElementById('submit');
const taskForm = document.getElementById('task-form');
const newTask = {
    id: Math.floor(Math.random() * 100),
    title: newTaskTitle.value,
    completed: false,
    createdAt: new Date()
};
const addNewTask = (newTask) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', () => {
        newTask.completed = checkBox.checked;
        console.log(newTask);
    });
    checkBox.checked = newTask.completed;
    label.append(checkBox, newTaskTitle.value);
    item.append(label);
    list.append(item);
    saveTask(newTask.title);
};
taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener('submit', e => {
    e.preventDefault();
    if ((newTaskTitle === null || newTaskTitle === void 0 ? void 0 : newTaskTitle.value) == "" || (newTaskTitle === null || newTaskTitle === void 0 ? void 0 : newTaskTitle.value) == null)
        return;
    addNewTask(newTask);
    newTaskTitle.value = '';
});
const tasks = loadTask();
tasks.forEach(addNewTask);
function loadTask() {
    const taskJson = localStorage.getItem('Tasks');
    if (taskJson == null)
        return [];
    return JSON.parse(taskJson);
}
function saveTask(newTaskTitle) {
    const storedTask = JSON.parse(tasks);
    storedTask.push(newTaskTitle);
    return localStorage.setItem('Tasks', JSON.stringify(newTaskTitle));
}
