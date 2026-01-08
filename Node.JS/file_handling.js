const fs = require("fs");
const filePath= "./tasks.json";

const loadTasks = ()=>
{
    try{
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
    }
    catch(error)
    {
        return [];
    }
}

const saveTasks = (tasks) =>
{
    const dataJSON = JSON.stringify(tasks,null,2);
    fs.writeFileSync(filePath,dataJSON);

}

const addTask = (task)=>
{
    if (!task)
    {
        console.log('Please Provide a task')
        return;
    }

    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log("Task added: ". task);


}


const listTasks =()=>
{
     const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }
 tasks.forEach((t, index) => console.log(`${index + 1} - ${t.task}`));
}

const removeTask = (index) =>
{
   if (!Number.isInteger(index) || index < 1 || index > tasks.length) {
    console.log("Invalid task number. Example: node app.js remove 1");
    return;
  }

  const removed = tasks.splice(index-1,1);
  saveTasks(tasks);
  console.log("Task removed:", removed[0].task);

  
}



const command = process.argv[2];
const argument = process.argv[3];



if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument, 10));
} else {
  console.log("Command not found!");
  console.log('Use: node app.js add "Task name"');
  console.log("Use: node app.js list");
  console.log("Use: node app.js remove 1");
}
