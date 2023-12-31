const program = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const figlet = require('figlet')
const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')
const { clearConsole } = require('./lib/util')

// 首行提示
program.name('yang-cli').usage(`<command> [option]`)

// 版本号
program.version(`v${require('./package.json').version}`)

// 给help指令添加提示
program.on('--help', function () {
  console.log(
    `${chalk.cyan(
      figlet.textSync('yang-cli', {
        font: 'Doom',
        horizontalLayout: 'full',
        verticalLayout: 'default',
        width: 'default',
        whitespaceBreak: true,
      })
    )}`
    // '\r\n' +
  )
})

// 命令
// 创建项目的命令
program
  .command('create <app-name>')
  .description('创建一个新项目')
  .action(async function (name) {
    clearConsole()

    // 1.判断当前目录是否有相同命名的文件夹
    const targetPath = path.join(process.cwd(), name)
    if (fs.existsSync(targetPath)) {
      // 存在同名文件
      const isOverwirte = await inquirer.prompt([
        {
          name: 'overwrite',
          type: 'list',
          message: '已存在同命文件,是否覆盖之前的文件夹',
          choices: [
            { name: '删除', value: true },
            { name: '取消', value: false },
          ],
        },
      ])
      // 删除原有文件
      if (isOverwirte.overwrite) {
        fs.remove(targetPath)
        console.log('删除成功')
      } else {
        return
      }
    }
    // 2.新建文件(github克隆模板)
  })

program.parse(program.argv)
