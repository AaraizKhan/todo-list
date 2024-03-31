#! /usr/bin/env node

import inquirer from "inquirer"

console.log("Welcome to TODO list !")
let todos = [];
let condition = true;

while(condition){
let addTask = await inquirer.prompt(
    [
    {
        name: "todo",
        type: "input",
        message: "What do you want to add in your todo list ?"
    },
    {
        name: "addmore",
        type: "confirm",
        message: "Are you sure you want to add more ?",
        default: "false"
    
     }
]
    );
todos.push(addTask.todo);
condition = (addTask.addmore)
console.log(todos)

}

