const program = require('commander') // 控制台命令
const chalk = require('chalk') // 美化工具
const Inquirer = require('inquirer') // 命令行交互
const figlet = require('figlet') // 艺术字美化工具
const { default: Choices } = require('inquirer/lib/objects/choices')

program.name('yang-cli').usage(`<command>[option]`).version(`1.0.0`)

console.log(`${chalk.green.underline.bold('forgive')} me`)

console.log(
  '\r\n' +
    figlet.textSync('demo', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true,
    })
)

// new Inquirer.prompt([
//   {
//     name: 'vue',
//     type: 'checkbox',
//     message: 'check the features needed for you project',
//     choices: [
//       {
//         name: 'Babel',
//         checked: 'true',
//       },
//       {
//         name: 'TypeScript',
//         checked: 'true',
//       },
//     ],
//   },
// ]).then((data) => {
//   console.log(data)
// })

program.parse(program.argv)
