const list=document.getElementById("list") as HTMLUListElement
const newTaskTitle=document.getElementById("new-task-title") as HTMLInputElement
const submit=document.getElementById('submit')
const taskForm=document.getElementById('task-form')



type Task={
    id:number,
    title:string,
    completed:boolean,
    createdAt:Date
}

const newTask:Task={
    id:Math.floor(Math.random()*100),
    title:newTaskTitle.value,
    completed:false,
    createdAt:new Date()
}





const addNewTask=(newTask:Task)=>{
    const item=document.createElement('li')
    const label=document.createElement('label')
    const checkBox=document.createElement('input')
    checkBox.type='checkbox'
    checkBox.addEventListener('change',()=>{
        newTask.completed=checkBox.checked
        console.log(newTask)
    })
    checkBox.checked=newTask.completed
    label.append(checkBox,newTaskTitle.value)
    item.append(label)
    list.append(item)
    saveTask(newTask.title)
}

taskForm?.addEventListener('submit',e=>{
    e.preventDefault()
    
    if(newTaskTitle?.value == "" || newTaskTitle?.value == null) return
    
    addNewTask(newTask)
    newTaskTitle.value=''
})

const tasks:Task[]=loadTask()
tasks.forEach(addNewTask)

function loadTask():Task[]{
   const taskJson= localStorage.getItem('Tasks')
   if (taskJson == null) return []
   return JSON.parse(taskJson)
}

function saveTask(newTaskTitle:string){
    const storedTask=JSON.parse(tasks)
    storedTask.push(newTaskTitle)
   return localStorage.setItem('Tasks',JSON.stringify(newTaskTitle))
}
