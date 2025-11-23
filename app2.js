import chalk from "chalk"
// import { use } from "react";
import  readline from "readline-sync"


console.clear();

console.log(chalk.hex("#045e1b")("========node chalk ============="))

console.log(chalk.hex("rgba(6, 23, 75, 0.33)")("INSTA LOGIN "));

let username=readline.question(chalk.red("ENTER USER NAME "))

let password =readline.question(chalk.red("ENTER PASSWORD"))

if(username==="zoheb"&& password==="7777"){
    console.log("login succcesfull");
    console.log(`welcome ${username}`);
}else{
    console.log("login faild");
    console.log("in correcct pass");
}