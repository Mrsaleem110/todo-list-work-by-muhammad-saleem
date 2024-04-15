#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.magenta("\n\t welcome to saleem coding its my todo list work\n"));
// while (conditions) {
//     let addtask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: "Enter your new task."
//         }
//     ]);
//     todolist.push(addtask.task);
//     console.log(`${addtask.task} task added in todolist successfully.`);
//     let addmoretask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message:chalk.bgBlue ("Do you want to add more task ?"),
//             default: "false"
//         }
//     ]);
//     conditions = addmoretask.addmore;
//   }
//     console.log ("your updated todo list :",todolist);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: 'list',
                message: "select an option you want to do",
                choices: ["add task", "delete task", "update task", "view todo-list", "exit"]
            }
        ]);
        if (option.choice === "add task") {
            await addtask();
        }
        else if (option.choice === "delete task") {
            await deletetask();
        }
        else if (option.choice === "view todo list") {
            await viewtask();
        }
        else if (option.choice === " exit") {
            conditions = false;
        }
    }
};
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task"
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in todo list`);
};
//  function to view all todo list tasks
let viewtask = () => {
    console.log("\n your todo list \n");
    todolist.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
// function to delete a task from the list
let deletetask = async () => {
    await viewtask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index of the task you want to delete"
        }
    ]);
    let deletedtask = todolist.splice(taskindex.index - 1, 1);
    console.log(`\n ${deletedtask} this task has been deleted successfully from your todo list `);
};
//  function to update a task
let updatetask = async () => {
    await viewtask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index no of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "new enter new task name"
        }
    ]);
    todolist[update_task_index - 1] = update_task_index.new_task;
    console.log(`\n task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option : "view todo_list"]`);
};
main();
