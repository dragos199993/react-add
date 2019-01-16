
const { info, success, error } = require("log-symbols");
const chalk = require("chalk");

const showSuccess = arg =>
  console.log(chalk.green.bold(`${success} ${arg}`));

const showInfo = arg =>
  console.log(chalk.yellow.bold(`${info} ${arg}`))

const showDanger = arg =>
  console.log(chalk.red.bold(`${error} ${arg}`))

module.exports = {
  showInfo, showSuccess, showDanger
}