const readline = require('readline')

const clearConsole = () => {
  // 清空终端
  // console.log('\n'.repeat(process.stdout.rows))
  // 改变命令行上的光变位置，将其移动光标到行首，并且是覆盖
  // readline.cursorTo(process.stdout, 0, 0)
  // 让命令行从当前行开始，到最后一行结束，将这两行之间所有内容清除。
  // readline.clearScreenDown(process.stdout)
  //-----------------------------------------------------
  // 转义字符\x1B实现清空屏幕
  console.log('\x1Bc')
}

module.exports = {
  clearConsole
}
