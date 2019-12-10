const path = require('path')
const execFileSync = require('child_process').execFileSync;
const moduleList = require('./module-conf').moduleList || []
process.env.NODE_ENV = 'production'
const buildFile = path.join(__dirname, 'build.js')

console.log("process.env:",process.env.NODE_ENV);
for( const module of moduleList){
  console.log('正在编译:',module)
  // 异步执行构建文件，并传入两个参数，module：当前打包模块，separate：当前打包模式（分开打包）
  execFileSync( 'node', [buildFile, module, 'separate'], {})
}
