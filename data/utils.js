const chalk             = require("chalk");
const {textSync}            = require("figlet")
const success        = require("log-symbols").success;

function showSuccess(arg){
    console.log(
        chalk.green.bold(
        `${success} ${arg}`
        )
    );
}


module.exports = {
    showSuccess
}